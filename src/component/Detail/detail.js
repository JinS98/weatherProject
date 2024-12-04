import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import * as S from "../Today/todayStyle"
import Icon, { StarFilled,UndoOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { locationState } from '../../common/Recoil/useRecoilState';
import { temp } from '../../common/library/temp';


export default function Detail(props) {
  const [location, setLocation] = useRecoilState(locationState);
  const key = "95bdbc29bb5637776791324fa9fab9ed"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const router = useRouter()
  const [today, setToday] = useState("")
  const [weather, setWeather] = useState([])
  const [reSearch,setResearch] = useState(false)
  const [img, setImg] = useState("")
  const [loading,setLoading] = useState(false)
  const [detail,setDetail] = useState({
    cityName:"",
    icon:"",
    temp:0,
    tempFeel:0,
    tempMax:0,
    tempMin:0
})

    useEffect(() => {
      if(localStorage.getItem('weather')) {
          setWeather((JSON.parse(localStorage.getItem('weather'))))
          return
      }
    },[])
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url)
        const result = await response.json();
        console.log(result.cod)
        if(result.cod !== 200) {
          if(reSearch){
            return
          }else{
            alert("지역 이른을 확인해주세요")
            router.push('/')
            return
          }
        }else{
          if(!result.weather) return
        if(result) {
            if(result?.weather[0].id >= 700 && result.weather[0].id < 800) {
              setImg("Mist")
            }else{
              setImg(result?.weather[0].main)
            }
            setToday(new Date())
            setDetail({
                cityName: result?.name,
                icon: result?.weather[0].icon,
                temp: result?.main.temp,
                tempFeel: result?.main.feels_like,
                tempMax : result?.main.temp_max,
                tempMin: result?.main.temp_min,
                wind:result?.wind.speed
            })
            setLoading(true)
            return
        }   
        }
        
    }
    fetchData()
  
    },[location])

    const onClickBtn = () => {
      setResearch(true)
      router.push('/')
      setLocation("")
      return
  }
  const onClickFav = () => {
      if(weather.length >= 7) {
          if(weather.includes(detail.cityName)) {
              alert("이미 즐겨찾기에 있는 도시입니다!")
              return
          }else{
              weather.shift()
              weather.push(detail.cityName)
              localStorage.setItem('weather',JSON.stringify(weather))
              alert("즐겨찾기에 추가되었습니다!")
              return
          }
      }
      if(weather.length === 0) {
          weather.push(detail.cityName)
          localStorage.setItem('weather',JSON.stringify(weather))
          alert("즐겨찾기에 추가되었습니다!")
      }else if(!weather.includes(detail.cityName)){
          weather.push(detail.cityName)
          localStorage.setItem('weather',JSON.stringify(weather))
          alert("즐겨찾기에 추가되었습니다!")
      }else{
          alert("이미 즐겨찾기에 있는 도시입니다!")
      }
      
  }
  console.log(detail)
    return(
      <S.DetailWrap style={{
        backgroundImage:`url(/weather_img/${img}.jpg)`,
        backgroundSize : "cover"
    }}>
          {loading ?
          <S.dataWrap>
          <S.CityName>{detail.cityName}</S.CityName>
          {/* <S.Today>현재 시간: {getDate(today)}</S.Today> */}
          <S.WeatherDetail>
              <S.WeatherDetail_left>
                  <S.Icon src = {`https://openweathermap.org/img/wn/${detail.icon}.png`} />
                  <S.Temp>{temp(detail.temp)}°</S.Temp>
              </S.WeatherDetail_left>
              <S.WeatherDetail_right>
              <S.Feels_like>체감온도 <S.StrongWord>{temp(detail.tempFeel)}°</S.StrongWord></S.Feels_like>
                  <S.Max_Min>
                      <S.Min>
                      {temp(detail.tempMin)}°
                      </S.Min>
                      /
                      <S.Max>
                      {temp(detail.tempMax)}°
                      </S.Max>
                  </S.Max_Min>
              </S.WeatherDetail_right>
          </S.WeatherDetail>
          <S.BtnWrap>
              <S.Btn onClick={onClickBtn}><UndoOutlined /></S.Btn>
              <S.Btn onClick={onClickFav}>
              <StarFilled />
              </S.Btn>
          </S.BtnWrap>
      </S.dataWrap>
          :
          <S.dataWrap>
            <S.DetailLoading>
              날씨 정보를 받아오는 중입니다.
            </S.DetailLoading>
          </S.dataWrap>}
          
    </S.DetailWrap>
    )
  }