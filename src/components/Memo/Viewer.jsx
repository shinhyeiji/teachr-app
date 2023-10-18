import * as S from './style/Viewer.style.jsx';
import { weatherList } from '../../util.jsx';

const Viewer = ({ date, content, weatherId }) => {
    const weatherItem = weatherList.find((it) => it.id === weatherId);
    console.log(weatherItem);

    if (!weatherItem) {
        return (
            <S.Viewer>
                <S.ViewerSection>
                    <S.ViewerHeader>
                        <S.ViewerTitle>MEMO</S.ViewerTitle>
                        <S.WeatherImgWrapper>
                            <S.WeatherName>-</S.WeatherName>
                        </S.WeatherImgWrapper>
                    </S.ViewerHeader>
                    <S.ContentWrapper>
                        <S.Content>{content}</S.Content>
                    </S.ContentWrapper>
                </S.ViewerSection>
            </S.Viewer>
        );
    } else {
        return (
            <S.Viewer>
                <S.ViewerSection>
                    <S.ViewerHeader>
                        <S.ViewerTitle>MEMO</S.ViewerTitle>
                        <S.WeatherImgWrapper>
                            <S.WeatherImg>{weatherItem.img}</S.WeatherImg>
                            <S.WeatherName>{weatherItem.name}</S.WeatherName>
                        </S.WeatherImgWrapper>
                    </S.ViewerHeader>
                    <S.ContentWrapper>
                        <S.Content>{content}</S.Content>
                    </S.ContentWrapper>
                </S.ViewerSection>
            </S.Viewer>
        );
    }
};


export default Viewer;