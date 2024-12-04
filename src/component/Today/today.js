import axios from 'axios'
import {useEffect, useState} from 'react'
import * as S from "./todayStyle"
import {getDate} from "../../common/library/date"
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { locationState } from '../../common/Recoil/useRecoilState';
import { temp } from '../../common/library/temp';


export default function MainPage() {
    const key = "95bdbc29bb5637776791324fa9fab9ed"
    const [currentPosition, setCurrentPosition] = useState({
        lat: 0,
        lng: 0
    })
    const [currentWeather,setCurrentWeather] = useState({
        cityName:"",
        icon:"",
        temp:0,
        tempFeel:0,
        tempMax:0,
        tempMin:0,
        wind:0
    })
    const [currentRain, setCurrentRain] = useState(0)
    const [currentSnow, setCurrentSnow] = useState(0)
    const [snowOk, setSnowOk] = useState(false)
    const [currentOk, setCurrentOk] = useState(false)
    const [location, setLocation] = useRecoilState(locationState);
    const [today, setToday] = useState("")
    const [weather, setWeather] = useState([])
    const [reload,setReload] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${currentPosition.lat}&lon=${currentPosition.lng}&appid=${key}`
    const data = {}
    useEffect(() => {

    },[reload])

    useEffect(() => {
        if(localStorage.getItem('weather')) {
            setWeather((JSON.parse(localStorage.getItem('weather'))))
        }
    },[])

    const searchWeather = async (e) => {   
        if(e.key === 'Enter') {
            router.push('/detail')
        }
    }

    
    const removeFav = (e) => {
        for(let i = 0; i <= weather.length;i++) {
            if(e.target.value === weather[i]) {
                weather.splice(i,1)
            }
        }
        localStorage.setItem('weather',JSON.stringify(weather))
        setReload((prev => !prev))
    }
    const searchFav = async (e) => {
        setLocation(e.currentTarget.innerText)
        router.push('/detail')
    }
    useEffect(() => {
        if(navigator.geolocation) {
           navigator.geolocation.getCurrentPosition((position) => {
            if(position) {
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            }   
            })
        }
    },[])
    useEffect(() => {
        if(currentPosition.lat === 0) return
        const fetchData = async () => {
            const response = await fetch(urlCurrent)
            const result = await response.json();
            if(!result.weather) return
            if(result) {
                if(result.rain) {
                    setSnowOk(false)
                    setCurrentRain(result.rain["1h"])
                }else if(result.snow) {
                    setSnowOk(true)
                    setCurrentSnow(result.snow['1h'])
                }
                setToday(new Date())
                setCurrentWeather({
                    cityName: result?.name,
                    icon: result?.weather[0].icon,
                    temp: result?.main.temp,
                    tempFeel: result?.main.feels_like,
                    tempMax : result?.main.temp_max,
                    tempMin: result?.main.temp_min,
                    wind:result?.wind.speed
                })
                setLoading(true)
            }   
        }
        fetchData()

    },[currentPosition])

    return (
        <S.Wrap style={{
            backgroundImage: `url(/weather_img/main.jpg)`,
            backgroundSize : "cover"
        }}>
            <S.HomeWrap>
                            {loading ? 
                             <S.CurrentWrap>
                             <S.CurrentBox>
                             <S.CurrentCity>{currentWeather.cityName}</S.CurrentCity>
                             <S.CurrentTime>현재시간:<S.P>{getDate(today)}</S.P></S.CurrentTime>
                             <S.CurrentTempWrap>
                                 <S.CurrentIcon src = {`https://openweathermap.org/img/wn/${currentWeather.icon}.png`}/>
                                 <S.CurrentTemp>{temp(currentWeather.temp)}°</S.CurrentTemp>
                             </S.CurrentTempWrap>
                             <S.CurrentWeather>
                                 <S.Menu style={{borderRight:'2px double black'}}>
                                     <S.Title>체감온도(°)</S.Title>
                                     <S.Value>{temp(currentWeather.tempFeel)}</S.Value>
                                 </S.Menu>
                                 <S.Menu style={{borderRight:'2px double black'}}>
                                     <S.Title>최저온도(°)</S.Title>
                                     <S.Value>{temp(currentWeather.tempMin)}</S.Value>
                                 </S.Menu>
                                 <S.Menu style={{borderRight:'2px double black'}}>
                                     <S.Title>최도온도(°)</S.Title>
                                     <S.Value>{temp(currentWeather.tempMax)}</S.Value>
                                 </S.Menu>
                                 <S.Menu style={{borderRight:'2px double black'}}>
                                     <S.Title>풍속(m/s)</S.Title>
                                     <S.Value>{currentWeather.wind}</S.Value>
                                 </S.Menu>
                                 <S.Menu>
                                     <S.Title>{snowOk ? "강설량(mm/h)" : "강우량(mm/h)"}</S.Title>
                                     <S.Value>{snowOk ? currentSnow : currentRain}</S.Value>
                                 </S.Menu>
                             </S.CurrentWeather>
                             </S.CurrentBox>
                         </S.CurrentWrap>
                :
                <S.CurrentWrap>
                    <S.CurrentBox>
                        <S.Loading>날씨 정보를 받아오는 중입니다!</S.Loading>
                    </S.CurrentBox>
                </S.CurrentWrap>
                }
   
                <S.SearchBack>
                <S.SearchWrap>
                <S.Content>지역을 입력해주세요.</S.Content>
                <S.Input
                placeholder='영문으로 입력 후 ENTER'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type='text'
                onKeyDown={searchWeather}
                />
                </S.SearchWrap>
                <S.FavWrap>
                    {weather?.map((el,index) => (
                        <S.Fav key={el}  >
                            <S.FavCity onClick={searchFav}>{el}</S.FavCity>
                            <S.RemoveFav value={el} onClick={removeFav}>X</S.RemoveFav>
                        </S.Fav>
                    ))}    
                </S.FavWrap>   
                </S.SearchBack>
            </S.HomeWrap>    
            
        </S.Wrap>
    )
  }