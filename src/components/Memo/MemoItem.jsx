import * as S from './style/MemoItem.style.jsx';
import { useNavigate } from  'react-router-dom';
import { getWeatherImgById } from './util.jsx';

const MemoItem = ({ id, weatherId, content, date }) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    }
    return(
        <S.MemoItem>
            <S.WeatherImgDiv
                onClick={goDetail}
                className={["img_section", `img_section_${weatherId}`].join(" ")}
            >
                <S.WeatherImg alt={`weather${weatherId}`} src={getWeatherImgById(weatherId)} />
            </S.WeatherImgDiv>
            
        </S.MemoItem>
    )
}
export default MemoItem;