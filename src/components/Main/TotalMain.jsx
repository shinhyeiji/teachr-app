import React, { useState, useEffect } from 'react';
import * as S from './style/TotalMain.style';

const TotalMain = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [storedNames, setStoredNames] = useState([]);
    const [promiseData, setPromiseData] = useState([]);
    const [todayPlay, setTodayPlay] = useState([]);

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // 꼬마선생님 데이터 불러오기
        const storedNamesFromLocalStorage = JSON.parse(localStorage.getItem('names')) || [];
        setStoredNames(storedNamesFromLocalStorage);

        // 오늘의 약속 데이터 불러오기
        const promiseDataFromLocalStorage = JSON.parse(localStorage.getItem('promiseData')) || [];
        setPromiseData(promiseDataFromLocalStorage);

        // 하루일과 데이터 불러오기
        const todayPlayFromLocalStorage = JSON.parse(localStorage.getItem('todayPlay')) || [];
        setTodayPlay(todayPlayFromLocalStorage);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <S.TotalMain>
            <S.Title>
                <S.DateTitle>오늘은</S.DateTitle>
                <S.DateContent>
                    <S.CurrentDate>{currentTime.getFullYear()}년 {currentTime.getMonth() + 1}월 {currentTime.getDate()}일 {daysOfWeek[currentTime.getDay()]}요일</S.CurrentDate>
                    <br />
                    <S.CurrentTime>{currentTime.toLocaleTimeString()}</S.CurrentTime>
                </S.DateContent>
            </S.Title>
            <S.Content>
                <S.Div>
                    <S.DivTitle1 src="public/imgs/mainlabel1.png" />
                    <S.DivContent1>
                        {storedNames.length > 0 && storedNames.map((name, index) => (
                            <p key={index}>{name}</p>
                        ))}
                    </S.DivContent1>
                </S.Div>
                <S.Div>
                <S.DivTitle2 src="public/imgs/mainlabel2.png" />
                    <S.DivContent2>
                        {promiseData.length > 0 && promiseData.map((promise, index) => (
                            <p key={index}>{promise.content}</p>
                        ))}
                    </S.DivContent2>
                </S.Div>
                <S.Div>
                <S.DivTitle3 src="public/imgs/mainlabel3.png" />
                    <S.DivContent3>
                        {todayPlay.length > 0 && todayPlay.map((activity, index) => (
                            <p key={index}>{activity.text}</p>
                        ))}
                    </S.DivContent3>
                </S.Div>
            </S.Content>
        </S.TotalMain>
    );
};

export default TotalMain;
