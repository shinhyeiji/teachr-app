import * as S from './style/WeatherItem.style.jsx';

const WeatherItem = ({ id, img, name, onClick, isSelected }) => {
    const handleOnClick = () => {
        onClick(id);
    }
    return(
        <S.Weather onClick={handleOnClick}>
            {img}
            <S.WeatherText>{name}</S.WeatherText>
        </S.Weather>
    )
}
export default WeatherItem;