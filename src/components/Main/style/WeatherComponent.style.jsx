import styled from 'styled-components';

export const WeatherComponent = styled.div`
    width: 800px;
    height: 700px;
    background-image: url('/imgs/weatherbackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justift-content: center;
    align-items: center;
    padding: 50px 0;
    border-radius: 10px;
    gap: 30px;
`
export const Date = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justift-content: space-around;
    align-items: center;
    margin-bottom: 100px;
`
export const DateTitle = styled.h2`
    width: 40%;
    font-size: 90px;
    color: #fffff0;
    margin: 30px 0 0 30px;
`
export const DateContent = styled.div`
    width: 60%;
    text-align: right;
    margin: 40px 40px 0 0;
`
export const CurrentDate = styled.span`
    font-size: 50px;
    font-weight: 700;
`
export const CurrentTime = styled.span`
    font-size: 50px;
    font-weight: 700;
`
export const Weather = styled.div`
    width: 100%;
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Weather1 = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TempWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    gap: 5px;
`
export const CurrentTemp = styled.p`
    margin-right: 10px;
    font-size: 80px;
    font-weight: 700;
`
export const FeelingTemp = styled.p`
    margin-bottom: 5px;
    font-size: 30px;
    color: gray;
    font-weight: 700;
`
export const WeatherWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
`
export const WeatherText = styled.p`
    font-size: 30px;
    font-weight: 700;
`
export const WeatherImg = styled.img`
    width: 150px;
`
export const WeatherDiv = styled.div`
    width: 82%;
    background-color: #fffff0;
    margin: 50px 40px;
    padding: 20px 30px;
    border-radius: 10px;
`
export const Weather2 = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Line = styled.div`
    width: 90%;
    margin-left: 37px;
    border: 3px solid #fff;
`
export const MaxTemp = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: gray;
    margin-right: 45px;
`
export const MinTemp = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: gray;
    margin-right: 45px;
`
export const Humidity = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: gray;
`
export const Weather3 = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-conetnt: center;
    align-items: center;
`
export const Pm2 = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: gray;
    margin-right: 70px;
`
export const Air = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: gray;
`
export const AirCondition = styled.p`
`
export const Weather4 = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 40px 0 0 0;
`
export const City = styled.div`
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    text-decoration: none;
`



    