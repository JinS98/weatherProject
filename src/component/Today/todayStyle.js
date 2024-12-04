import styled from "@emotion/styled";
import * as M from "../../../styles/mediaQueries";


export const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    ${M.mediaM} {
        height: 100%;
  }
`
export const Loading = styled.div`
    font-size: 40px;
    font-weight: 900;
    margin-top: 220px;
    ${M.mediaM} {
        font-size: 20px;
        margin-top: 0px;
  }
`
export const DetailLoading = styled.div`
    font-size: 25px;
    font-weight: 900;
    ${M.mediaM} {
        font-size: 20px;
        margin-top: 0px;
  }
`
export const DetailWrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const dataWrap = styled.div`
    /* border: 1px solid white; */
    border-radius: 20px;
    width: 30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: rgba(153,153,153,0.4); */
    background-color: white;
    ${M.mediaM} {
        height: 40%;
        width: 90%;
  }
`
export const CityName = styled.div`
    font-size: 40px;
`
export const Today = styled.div`
    position: relative;
    bottom: 20px;
`
export const WeatherDetail = styled.div`
width: 70%;
height: 30%;
display: flex;
justify-content: space-between;
position: relative;
bottom: 15px;
`
export const WeatherDetail_left = styled.div`
display: flex;
`
export const WeatherDetail_right = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Icon = styled.img`

`
export const Temp = styled.div`
color: black;
position: relative;
right: 30px;
font-weight: 900;
width: 20%;
font-size: 50px;
padding-top: 5px;
`
export const Feels_like = styled.div`
    font-size: 20px;
    font-weight: 700;
`
export const StrongWord = styled.span`
font-size: 18px;
font-weight: 600;
`
export const Max_Min = styled.div`
display: flex;
padding-top: 5px;
`
export const Min = styled.div`
/* color: #2a74f8; */
`
export const Max = styled.div`
    color:  #dc0100;
    font-weight: bold;
`
export const Btn = styled.button`
    width: 25%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid white;
    :hover{
        cursor: pointer;
        background-color: #cccccc;
        border-color: #cccccc;
    }
`
export const SearchBack = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    ${M.mediaM} {
        padding-top:10px;
        width: 80%;
  }
`
export const SearchWrap = styled.div`
    border: 3px solid black;
    width: 500px;
    border-radius: 10px;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(153,153,153,0.4);
    margin-bottom: 30px;

    ${M.mediaM} {
        width: 100%;
        height: 25%;
  }
`
export const FavWrap = styled.div`
    width: 100%;
    height: 50%; 
    display: flex;
    flex-direction: column;
    gap: 15px;
    ${M.mediaM} {
        width: 100%;
  }
`
export const Content = styled.div`
    margin-top: 20px;
    font-weight: 700;
    font-size: 25px;
    color: black;
`
export const Input = styled.input`
    height: 20%;
    border: 2px solid black;
    margin-bottom: 50px;
    border-radius: 7px;
    width: 70%;
    padding-left: 10px;
    ${M.mediaM} {
        margin-top: 30px;
        width: 80%;
        height: 25%;
  }
    
    :focus{
        outline: none;
    }
`
export const BtnWrap = styled.div`
    width: 45%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`
export const Fav = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 70%;
    border-radius: 20px;
    background-color: rgba(153,153,153,0.4);
    border: 3px solid black;
`
export const FavCity = styled.div`
    padding-right: 20px;
    font-weight: 700;
    font-size: 20px;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const RemoveFav = styled.button`
    background-color: rgba(0,0,0,0);
    font-size: 20px;
    border: none;
    cursor: pointer;
`
export const HomeWrap = styled.div`
width: 100%;
height: 100%;
display: flex;
${M.mediaM} {
        flex-direction: column;
        align-items: center;
  }
`
export const CurrentWrap = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;

    ${M.mediaM} {
        padding-top: 10px;
        width: 80%;
  }
`
export const CurrentBox = styled.div`
    padding: 50px;
    width: 85%;
    height: 85%;
    background-color: rgba(153,153,153,0.4);
    border: 3px solid black;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${M.mediaM} {
        padding: 20px;
        width: 100%;

  }
`
export const CurrentCity = styled.div`
    display: flex;
    justify-content: center;
    font-size: 70px;
    font-weight: 700;

    ${M.mediaM} {
        font-size: 30px;
  }
`
export const CurrentTime = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-top: 10px;
    ${M.mediaM} {
        margin-top: 10px;
        font-size: 20px;
  }
`
export const P = styled.p`
    margin-left: 10px;
    font-weight: 700;
    ${M.mediaM} {
        font-size: 20px;
  }
`
export const CurrentTempWrap = styled.div`
    margin-top: 70px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    ${M.mediaM} {
        margin-top: 20px;
        font-size: 20px;
  }
`
export const CurrentIcon = styled.img`
    width: 35%;
`
export const CurrentTemp = styled.div`
    font-size: 100px;
    font-weight: 700;
    ${M.mediaM} {
        font-size: 50px;
  }
`
export const CurrentWeather = styled.div`
    margin-top: 70px;
    width: 110%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    ${M.mediaM} {
        margin-top: 20px;
        height: 80px;
  }
`
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    ${M.mediaM} {
        font-size: 18px;
  }
`
export const Value = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 900;
`
export const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`