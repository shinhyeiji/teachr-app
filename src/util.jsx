import * as S  from './components/Memo/style/util.style.jsx';

export const getWeatherImgById = (weatherId) => {
    const targetWeatherId = String(weatherId);
    switch(targetWeatherId){
        case "1":
            return '/public/imgs/weather1.png';
        case "2":
            return '/public/imgs/weather2.png';
        case "3":
            return '/public/imgs/weather3.png';
        case "4":
            return '/public/imgs/weather4.png';
        case "5":
            return '/public/imgs/weather5.png';
        default:
            return null;
    }
}

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
        img: <S.WeatherImg1 alt="맑음" src="/public/imgs/weather1.png" />
    },
    {
        id: 2,
        name: "흐림",
        img: <S.WeatherImg2 alt="흐림" src="/public/imgs/weather2.png" />,
    },
    {
        id: 3,
        name: "비",
        img: <S.WeatherImg3 alt="비" src="/public/imgs/weather3.png" />,
    },
    {
        id: 4,
        name: "바람",
        img: <S.WeatherImg4 alt="바람" src="/public/imgs/weather4.png" />,
    },
    {
        id: 5,
        name: "눈",
        img: <S.WeatherImg5 alt="눈" src="/public/imgs/weather5.png" />,
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