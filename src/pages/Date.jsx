import React, { useState, useEffect } from 'react';
import * as S from './style/Date.style.jsx';
import { setPageTitle } from '../util.jsx';

const DateComponent = () => {
    const [today, setToday] = useState(new Date());
    const [clickedCard1, setClickedCard1] = useState(false);
    const [clickedCard2, setClickedCard2] = useState(false);
    const [clickedCard3, setClickedCard3] = useState(false);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

        return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
    };

    const handleCardClick = () => {
        setClickedCard1(true);
        setClickedCard2(true);
        setClickedCard3(true);
    };

    const handleCard1Click = () => {
        setClickedCard1(true);
        setClickedCard2(false);
        setClickedCard3(false);
    };

    const handleCard2Click = () => {
        setClickedCard1(false);
        setClickedCard2(true);
        setClickedCard3(false);
    };

    const handleCard3Click = () => {
        setClickedCard1(false);
        setClickedCard2(false);
        setClickedCard3(true);
    };
    useEffect(()=>{
        setPageTitle("HappyDay :: Date");
        setToday(new Date());
    },[])

    return (
        <S.Container>
            <S.HeadWrapper onClick={handleCardClick}>
                <S.Title>오늘의 날짜</S.Title>
                <S.Des>화면을 클릭해주세요!</S.Des>
            </S.HeadWrapper>
            <S.Content>
                <S.Card1 onClick={handleCard1Click} clicked={clickedCard1}>
                    <S.Left>어제는</S.Left>
                    <S.Right>{formatDate(new Date(today.getTime() - 24 * 60 * 60 * 1000))}</S.Right>
                </S.Card1>
                <S.Card2 onClick={handleCard2Click} clicked={clickedCard2}>
                    <S.Left>오늘은</S.Left>
                    <S.Right>{formatDate(today)}</S.Right>
                </S.Card2>
                <S.Card3 onClick={handleCard3Click} clicked={clickedCard3}>
                    <S.Left>내일은</S.Left>
                    <S.Right>{formatDate(new Date(today.getTime() + 24 * 60 * 60 * 1000))}</S.Right>
                </S.Card3>
            </S.Content>
        </S.Container>
    );
};

export default DateComponent;
