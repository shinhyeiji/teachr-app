import * as S from './style/Viewer.style.jsx';
import { weatherList } from './util.jsx';

const Viewer = ({ content, weatherId }) => {
    const weatherItem = weatherList.find((it) => it.id === weatherId);
    console.log(weatherItem);

    if (!weatherItem) {
        // weatherItem이 없는 경우 예외 처리
        return <S.Viewer>날씨 정보를 찾을 수 없습니다.</S.Viewer>;
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