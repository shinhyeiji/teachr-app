import * as S from './style/TodayPlay.style';
import { useState, useEffect } from 'react';
import { setPageTitle } from '../util';

const TodayPlay = () => {
    const [changeText, setChangeText] = useState('')
    const [todayPlay, setTodayPlay] = useState([
        {
            text: '오늘은?',
            color: '#FFFACD'
        }
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = todayPlay.length;

    const colors = [
        '#FFD1DC', '#FFB6C1', '#FFC0CB', '#FF69B4',
        '#FFFACD', '#FFECB3', '#FAFAD2', '#FFFFE0',
        '#98FB98', '#90EE90', '#B0E57C', '#ADFF2F',
        '#AFEEEE', '#ADD8E6', '#B0C4DE', '#87CEEB',
        '#E6E6FA', '#D8BFD8', '#DDA0DD', '#BA55D3'
    ];
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random()*colors.length)
        return colors[randomIndex];
    }

    const handleChangeText = (e) => {
        setChangeText(e.target.value);
    }

    useEffect(() => {
        setPageTitle("HappyDay :: Today Play")

        const storedPlay = JSON.parse(localStorage.getItem('todayPlay'));
        if(storedPlay){
            setTodayPlay(storedPlay);
        }
    }, []);
    const saveToLocaleStorage = (playItems) => {
        localStorage.setItem('todayPlay', JSON.stringify(playItems));
    }

    const handleAddPlay= (e) => {
        e.preventDefault();
        const randomColor = getRandomColor();
        const newPlay = {
            text: changeText,
            color: randomColor
        };
        const updatedPlay = [...todayPlay, newPlay];
        setTodayPlay([...todayPlay, newPlay])
        setChangeText('');
        saveToLocaleStorage(updatedPlay);
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleAddPlay(e);
        }
    };
    const handleDeletePlay = (index) => {
        const updatedPlay = todayPlay.filter((_, i) => i !== index);
        setTodayPlay(updatedPlay);
        saveToLocaleStorage(updatedPlay);
    };
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    }
    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    }

    return(
        <S.Container>
            <S.HeadWrapper>
                <S.Title>오늘의 하루일과</S.Title>
                <S.AddPlay>
                    <S.PlayInput type="text" onChange={handleChangeText} onKeyDown={handleKeyPress} value={changeText} />
                    <S.AddButton onClick={handleAddPlay}>추가</S.AddButton>
                </S.AddPlay>
            </S.HeadWrapper>
            <S.ContentWrapper>
                <S.Content>
                    <S.LeftButton onClick={handlePrevSlide}>◀</S.LeftButton>
                    <S.TodayPlayWrapper>
                        <S.TodayPlay>{todayPlay[currentSlide]?.text}</S.TodayPlay>
                    </S.TodayPlayWrapper>
                    <S.RightButton onClick={handleNextSlide}>▶</S.RightButton>
                </S.Content>
                <S.PlayWrapper>
                    {todayPlay.map((item, index) => (
                        <S.Play key={index} color={item.color}>
                            <S.PlayText>{item.text}</S.PlayText>
                            <S.DeleteButton onClick={() => handleDeletePlay(index)}>X</S.DeleteButton>
                        </S.Play>
                    ))}
                </S.PlayWrapper>
            </S.ContentWrapper>
        </S.Container>
    )
}
export default TodayPlay;