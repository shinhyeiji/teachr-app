import * as S from './style/Play.style';
import { useState, useEffect } from 'react';
import { setPageTitle } from '../util';


const Play = () => {
    const [lines, setLines] = useState([]);
    const handleLinePlus = () => {
        setLines([...lines, <S.ContentLine key={lines.length} type="text" />])
    }
    useEffect(() => {
        setPageTitle("HappyDay :: Active Title")
    }, []);
    
    return(
        <S.Container>
            <S.HeadWrapper>
                <S.Title>활동명</S.Title>
            </S.HeadWrapper>
            <S.Content>
                <S.Date>
                    <S.DateInput type="text" />
                    <S.DateText>년</S.DateText>
                    <S.DateInput type="text" />
                    <S.DateText>월</S.DateText>
                    <S.DateInput type="text" />
                    <S.DateText>일</S.DateText>
                    <S.DateInput type="text" />
                    <S.DateText>요일</S.DateText>
                </S.Date>
                <S.PlayTitle>
                    <S.PlayText>제목:</S.PlayText>
                    <S.PlayInput type="text" />
                    <S.PlayButton onClick={handleLinePlus}>+</S.PlayButton>
                </S.PlayTitle>
                <S.PlayContent>
                    {lines}
                </S.PlayContent>
            </S.Content>
        </S.Container>
    )
}
export default Play;