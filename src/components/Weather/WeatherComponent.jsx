import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style/WeatherComponent.style';

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
                temp: data.main.temp,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                feels_like: data.main.feels_like,
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
            return <p>공기질: 아주 좋음😎</p>
        }
        else if(pollute.aqi === 2){
            return <p>공기질: 좋음😀</p>
        }
        else if(pollute.aqi === 3){
            return <p>공기질: 보통😊</p>
        }
        else if(pollute.aqi === 4){
            return <p>공기질: 나쁨😥</p>
        }
        else if(pollute.aqi === 5){
            return <p>공기질: 아주 나쁨😷</p>
        }
    }
  return (
    <S.WeatherComponent>
      <div>
        <span>Current Date: {currentTime.toLocaleDateString()}</span>
        <br />
        <span>Current Time: {currentTime.toLocaleTimeString()}</span>
      </div>
      <div>

        {weather.loading 
        ? <p>Loading...</p> 
        : <div>
            <p>현재기온: {weather.temp}</p>
            <p>체감기온: {weather.feels_like}</p>
            <p>최대기온: {weather.temp_max}</p>
            <p>최저기온: {weather.temp_min}</p>
            <p>습도: {weather.humidity}</p>
            <p>오늘의 날씨: {weather.desc}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" />
            <p>Icon: {weather.icon}</p>
            <p>지역: {weather.city}</p>
            <p>미세먼지: {pollute.pm2_5}</p>
            <p>공기질: {air()}</p>
        </div>
        }

      </div>
    </S.WeatherComponent>
  );
};

export default WeatherComponent;
