import * as S from './style/WeatherItem.style';
import React from 'react';

const WeatherItem = ({ id, img, name, onClick, isSelected }) => {
    const handleOnClick = () => {
        onClick(id);
    }
    return(
        <S.Weather onClick={handleOnClick} active={isSelected}>
            {img}
            <S.WeatherText>{name}</S.WeatherText>
        </S.Weather>
    )
}
export default React.memo(WeatherItem);