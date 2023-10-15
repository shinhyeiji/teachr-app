import * as S  from './style/util.style.jsx';

export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    if(month < 10){
        month = `0${month}`;
    }
    if(date < 10){
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
};

export const weatherList = [
    {
        id: 1,
        name: "맑음",
        img: <S.WeatherImg1 alt="맑음" src="/imgs/weather1.png" />
    },
    {
        id: 2,
        name: "흐림",
        img: <S.WeatherImg2 alt="흐림" src="/imgs/weather2.png" />,
    },
    {
        id: 3,
        name: "비",
        img: <S.WeatherImg3 alt="비" src="/imgs/weather3.png" />,
    },
    {
        id: 4,
        name: "바람",
        img: <S.WeatherImg4 alt="바람" src="/imgs/weather4.png" />,
    },
    {
        id: 5,
        name: "눈",
        img: <S.WeatherImg5 alt="눈" src="/imgs/weather5.png" />,
    },
]