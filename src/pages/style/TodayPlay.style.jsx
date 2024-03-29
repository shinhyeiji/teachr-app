import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    height: 810px;
    padding: 20px 0;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const HeadWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #f0f0f0;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`
export const Title = styled.h1`
    margin: 20px;
    color: gray;
`
export const AddPlay = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
`
export const PlayInput = styled.textarea`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 300px;
    height: 38px;
    font-size: 25px;
    text-align: center;
    margin-right: 3px;
    border: 5px solid #999fff;
    background-color: #fff;
`;
export const AddButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 100px;
    height: 50px;
    font-size: 25px;
    text-align: center;
    border: none;
    background-color: #999fff;
    color: #fff;
`;
export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const PlayWrapper = styled.div`
    width: 10%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const Play = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
    font-size: 15px;
    font-weight: 700;
    color: gray;
`
export const PlayText = styled.p`
    margin-right: 10px;
`
export const DeleteButton = styled.button`
    border: none;
    border-radius: 20%;
    font-size: 15px;
    color: white;
`
export const Content = styled.div`
    width: 90%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
export const LeftButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 10px;
    border: 3px solid lightgray;
    border-radius: 10px;
    font-size: 25px;
    color: lightgray;
    background-color: #fff;
`
export const RightButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 10px;
    border: 3px solid lightgray;
    border-radius: 10px;
    font-size: 25px;
    color: lightgray;
    background-color: #fff;
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
export const TodayPlayWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin-top: 20px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/imgs/PlayBG.png');
    background-size: cover;
    background-position: center;
    background-color: ${getRandomColor()};
`
export const TodayPlay = styled.p`
    font-size: 250px;
    padding-bottom: 40px;
    white-space: pre-wrap;
`