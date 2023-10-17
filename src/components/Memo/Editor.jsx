import * as S from './style/Editor.style.jsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFormattedDate, weatherList } from './util';
import Button from './Button.jsx';
import WeatherItem from './WeatherItem.jsx';


const Editor = ({id, date, content, weatherId, onSubmit}) => {
    const navigate = useNavigate();
    const [memo, setMemo]= useState({
        id: id,
        date: getFormattedDate(new Date(parseInt(date))),
        weatherId: weatherId,
        content: content,
    });
    
    const handleOnGoBack = () => {
        navigate(-1);
    };
    
    const handleChangeDate = (e) => {
        setMemo({
            ...memo,
            date: e.target.value,
        });
    };
    const handleChangeWeather = (weatherId) => {
        setMemo({
            ...memo,
            weatherId,
        });
    };
    const handleChangeContent = (e) => {
        setMemo({
            ...memo,
            content: e.target.value,
        });
    };

    const handleSubmit = () => {
        // onSubmit 함수를 호출하여 데이터를 전달합니다.
        onSubmit(memo);
    };

    return(
        <S.Editor>
            <S.EditorHeader>
                <S.EditorDate>
                    <S.SubTitle>날짜</S.SubTitle>
                    <S.InputWrapper>
                        <S.DateInput 
                            type="date" 
                            value={memo.date} 
                            onChange={handleChangeDate}
                        />
                    </S.InputWrapper>
                </S.EditorDate>
                <S.EditorWeather>
                    <S.SubTitle>날씨</S.SubTitle>
                    <S.WeatherWrapper>
                        {weatherList.map((it) => (
                            <WeatherItem 
                                key={it.id}
                                {...it}
                                onClick={handleChangeWeather}
                                isSelected={memo.weatherId === it.id}
                            />
                        ))}
                    </S.WeatherWrapper>
                </S.EditorWeather>
            </S.EditorHeader>
            <S.EditorDiary>
                <S.SubTitle>오늘의 메모 ✏️</S.SubTitle>
                <S.InputWrapper>
                    <S.ContentInput
                        placeholder="오늘은 어땠나요?"
                        value={memo.content}
                        onChange={handleChangeContent}
                    />
                </S.InputWrapper>
            </S.EditorDiary>
            <S.EditorSuccess>
                <Button text={"취소하기"} onClick={handleOnGoBack} />
                <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
            </S.EditorSuccess>
        </S.Editor>
    )
}
export default Editor;