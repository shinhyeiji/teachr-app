import React, { useEffect, useState } from 'react';
import * as S from './style/Weather.style.jsx';
import { setPageTitle } from '../util.jsx';
import { Link } from 'react-router-dom';

const Weather = () => {
    const [selectedWeather, setSelectedWeather] = useState('');
    const [selectedPollute, setSelectedPollute] = useState('');
    const [showWeatherImage, setShowWeatherImage] = useState(false);
    const [showPolluteImage, setShowPolluteImage] = useState(false);

    useEffect(() => {
        setPageTitle("HappyDay :: Weather");

        const storedWeather = localStorage.getItem('selectedWeather');
        if (storedWeather) {
            setSelectedWeather(storedWeather);
            setShowWeatherImage(true);
        }

        const storedPollute = localStorage.getItem('selectedPollute');
        if (storedPollute) {
            setSelectedPollute(storedPollute);
            setShowPolluteImage(true);
        }
    }, []);

    const weathers = {
        '맑음': '/imgs/weather1.png',
        '흐림': '/imgs/weather2.png',
        '비': '/imgs/weather3.png',
        '바람': '/imgs/weather4.png',
        '눈': '/imgs/weather5.png'
    };

    const pollutions = {
        '아주 좋음': '/imgs/greate.png',
        '좋음': '/imgs/good.png',
        '보통': '/imgs/normal.png',
        '나쁨': '/imgs/bad.png',
        '아주 나쁨': '/imgs/mask.png'
    };

    const handleWeatherClick = (weather) => {
        setSelectedWeather(weather);
        setShowWeatherImage(true);
        localStorage.setItem('selectedWeather', weather);
        localStorage.setItem('clicked', 'true');
    };

    const handlePolluteClick = (pollute) => {
        setSelectedPollute(pollute);
        setShowPolluteImage(true);
        localStorage.setItem('selectedPollute', pollute);
        localStorage.setItem('clicked', 'true');
    };

    return (
        <S.Container>
            <S.HeadWrapper>
                <S.Title>오늘의 날씨</S.Title>
                <S.WeatherSite as={Link} to="https://www.weather.go.kr/w/index.do">기상청 이동</S.WeatherSite>
            </S.HeadWrapper>
            <S.Content>
                <S.OutWeather>
                    <S.WeatherTitle>바깥날씨는?</S.WeatherTitle>
                    <S.WeatherWrapper>
                        {Object.keys(weathers).map((weather) => (
                            <S.WeatherButton
                                key={weather}
                                clicked={selectedWeather === weather ? 'true' : 'false'}
                                onClick={() => handleWeatherClick(weather)}
                            >
                                <S.WeatherImg src={weathers[weather]} alt={weather} />
                            </S.WeatherButton>
                        ))}
                    </S.WeatherWrapper>
                    {showWeatherImage && selectedWeather && (
                        <S.SelectedWeather>
                            <S.WeatherImg src={weathers[selectedWeather]} alt={selectedWeather} />
                            <S.Description>{selectedWeather}</S.Description>
                        </S.SelectedWeather>
                    )}
                </S.OutWeather>
                <S.Pollute>
                    <S.WeatherTitle>미세먼지는?</S.WeatherTitle>
                    <S.PolluteWrapper>
                        {Object.keys(pollutions).map((pollute) => (
                            <S.PolluteButton
                                key={pollute}
                                clicked={selectedPollute === pollute ? 'true' : 'false'}
                                onClick={() => handlePolluteClick(pollute)}
                            >
                                <S.WeatherImg src={pollutions[pollute]} alt={pollute} />
                            </S.PolluteButton>
                        ))}
                    </S.PolluteWrapper>
                    {showPolluteImage && selectedPollute && (
                        <S.SelectedPollute>
                            <S.WeatherImg src={pollutions[selectedPollute]} alt={selectedPollute} />
                            <S.Description>{selectedPollute}</S.Description>
                        </S.SelectedPollute>
                    )}
                </S.Pollute>
            </S.Content>
        </S.Container>
    );
};

export default Weather;
