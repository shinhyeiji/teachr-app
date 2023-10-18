import * as S from './style/MemoItem.style.jsx';
import React from 'react';
import { useNavigate } from  'react-router-dom';
import { getWeatherImgById } from '../../util.jsx';

const MemoItem = ({ id, weatherId, content, date }) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/memo/diary/${id}`, { state: { weatherId, content, date } });
    };

    const goEdit = () => {
        navigate(`/memo/edit/${id}`, { state: { weatherId, content, date } });
    };
    
    return(
        <S.MemoItem>
            <S.WeatherImgDiv onClick={goDetail}>
                <S.WeatherImg alt={`weather${weatherId}`} src={getWeatherImgById(weatherId)} />
            </S.WeatherImgDiv>
            <S.InfoSection onClick={goDetail}>
                <S.DateWrapper>
                    {new Date(parseInt(date)).toLocaleDateString()}
                </S.DateWrapper>
                <S.ContentWrapper>
                    {content.slice(0, 25)}
                </S.ContentWrapper>
            </S.InfoSection>
            <S.ButtonSection>
                <S.Button onClick={goEdit} text="수정하기">수정하기</S.Button>
            </S.ButtonSection>
        </S.MemoItem>
    )
}
export default React.memo(MemoItem);