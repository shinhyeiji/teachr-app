import * as S from './style/Edit.style.jsx';
import { useState, useEffect, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFormattedDate, weatherList } from './util';
import Button from './Button.jsx';
import WeatherItem from './WeatherItem.jsx';


const Edit = ({ initData, onSubmit}) => {
    const navigate = useNavigate();
    const [memo, setMemo]= useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
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
    useEffect(() => {
        if(initData){
            setMemo({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    }, [initData]);
    const handleSubmit = () => {
        onSubmit(memo);
    };


    return(
        <>
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
        </>
    )
}
export default Edit;