import React, { useState, useEffect } from 'react';
import * as S from './style/WeatherComponent.style';
import axios from 'axios';

const WeatherComponent = () => {
    const [latitude, setLatitude] = useState(37.5642135);
    const [longitude, setLongitude] = useState(126.9779692);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [pollute, setPollute] = useState({aqi: '0', pm2_5: '0'});
    let watchId = null;

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(updateLocation);
    } else {
      alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
    return () => {
        clearInterval(intervalId);
        if (watchId) {
            navigator.geolocation.clearWatch(watchId);
        }
    };
  }, []);

    const updateLocation = (position) => {
      setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
    };

    const [weather, setWeather] = useState({
        city:'',
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        feels_like: 0,
        humidity: 0,
        desc: '',
        icon: '',
        loading: true,
    });

  useEffect(() => {
    const fetchWeather = async () => {
        try {
            const apiKey = process.env.REACT_APP_WEATHER_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=kr&appid=${apiKey}&units=metric`;
            const response = await axios.get(url);
            const data = response.data;
            setWeather({
                city:data.name,
                temp: parseInt(data.main.temp, 10),
                temp_max: parseInt(data.main.temp_max, 10),
                temp_min: parseInt(data.main.temp_min, 10),
                feels_like: parseInt(data.main.feels_like, 10),
                humidity: data.main.humidity,
                desc: data.weather[0].description,
                icon: data.weather[0].icon,
                loading: false,
            });
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };
    const pollute = async() => {
        try{
            const apiKey = process.env.REACT_APP_WEATHER_KEY;
            const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&lang=kr&appid=${apiKey}&units=metric`
            const response = await axios.get(url);
            const data = response.data;
            console.log(data);
            setPollute({
                aqi: data.list[0].main.aqi, 
                pm2_5: data.list[0].components.pm2_5
            })
        }
        catch(error){
            console.log(error);
        }
    }
    fetchWeather();
    pollute();
  }, [latitude, longitude]); 

    const air = () => {
        if(pollute.aqi === 1){
            return <S.AirCondition style={{color:'blue'}}>상태: 아주 좋음😎</S.AirCondition>
        }
        else if(pollute.aqi === 2){
            return <S.AirCondition style={{color:'green'}}>상태: 좋음😀</S.AirCondition>
        }
        else if(pollute.aqi === 3){
            return <S.AirCondition style={{color:'orange'}}>상태: 보통😊</S.AirCondition>
        }
        else if(pollute.aqi === 4 ){
            return <S.AirCondition style={{color:'red'}}>상태: 나쁨😥</S.AirCondition>
        }
        else if(pollute.aqi === 5){
            return <S.AirCondition style={{color:'black'}}>상태: 아주 나쁨😷</S.AirCondition>
        }
    }
  return (
    <S.WeatherComponent>
        <S.Date>
            <S.DateTitle>오늘은</S.DateTitle>
            <S.DateContent>
                <S.CurrentDate>{currentTime.toLocaleDateString()}</S.CurrentDate>
                <br />
                <S.CurrentTime>{currentTime.toLocaleTimeString()}</S.CurrentTime>
            </S.DateContent>
        </S.Date>
        {weather.loading 
        ? (
        <S.Weather>
            <p>Loading...</p>
        </S.Weather>
        )
        : (
            <S.Weather>
                <S.Weather1>
                    <S.TempWrapper>
                        <span className="material-symbols-outlined" style={{ fontSize: '60px'}}>thermostat</span>
                        <S.CurrentTemp>{weather.temp}℃</S.CurrentTemp>
                        <S.FeelingTemp>체감: {weather.feels_like}℃</S.FeelingTemp>
                    </S.TempWrapper>
                    <S.WeatherWrapper>
                        <S.WeatherText>{weather.desc}</S.WeatherText>
                        <S.WeatherImg src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" />
                    </S.WeatherWrapper>
                </S.Weather1>
                <S.Line></S.Line>
                <S.WeatherDiv>
                    <S.Weather2>
                        <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'red', opacity:0.5}}>thermometer_add</span>
                        <S.MaxTemp>최대기온: {weather.temp_max}℃</S.MaxTemp>
                        <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'blue', opacity:0.5}}>thermometer_loss</span>
                        <S.MinTemp>최저기온: {weather.temp_min}℃</S.MinTemp>
                        <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'skyblue'}}>cool_to_dry</span>
                        <S.Humidity>습도: {weather.humidity}%</S.Humidity>
                    </S.Weather2>
                    <S.Weather3>
                        <span className="material-symbols-outlined" style={{ fontSize: '50px', color: 'gray'}}>snowing</span>
                        <S.Pm2>미세먼지: {pollute.pm2_5}</S.Pm2>
                        <S.Air>{air()}</S.Air>
                    </S.Weather3>
                </S.WeatherDiv>
                <S.Line></S.Line>
                <S.Weather4>
                    <S.City>📌{weather.city}</S.City>
                </S.Weather4>

            </S.Weather>
        )
        }

      
    </S.WeatherComponent>
  );
};

export default WeatherComponent;
