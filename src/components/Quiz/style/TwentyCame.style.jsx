import styled from 'styled-components';

export const CountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top :20px;
`
const getRandomColor = () => {
    const colors = [
        '#FFD1DC', '#FFB6C1', '#FFC0CB', '#FF69B4',
        '#FFFACD', '#FFECB3', '#FAFAD2', '#FFFFE0',
        '#98FB98', '#90EE90', '#B0E57C', '#ADFF2F',
        '#AFEEEE', '#ADD8E6', '#B0C4DE', '#87CEEB',
        '#E6E6FA', '#D8BFD8', '#DDA0DD', '#BA55D3'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};
export const CountButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 100%;
    height: 700px;
    border: none;
    border-radius: 11px;
    box-shadow: 5px 5px 5px ${getRandomColor()};
    background-color: ${getRandomColor()};
`
export const CountText = styled.p`
    font-size: 100px;
    margin: 10px 0;
`
export const CountNumber = styled.h1`
    font-size: 300px;
    margin: 10px 0;
`