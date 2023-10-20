import * as S  from './util.style';

export const getWeatherImgById = (weatherId) => {
    const targetWeatherId = String(weatherId);
    switch(targetWeatherId){
        case "1":
            return '/imgs/weather1.png';
        case "2":
            return '/imgs/weather2.png';
        case "3":
            return '/imgs/weather3.png';
        case "4":
            return '/imgs/weather4.png';
        case "5":
            return '/imgs/weather5.png';
        default:
            return null;
    }
}

export const getFormattedDate = (targetDate) => {
    const year = targetDate.getFullYear(); // 올바른 변수 사용
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const endTimeStamp = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).getTime();
    return { beginTimeStamp, endTimeStamp };
}

export const setPageTitle = (title) => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = title;
}