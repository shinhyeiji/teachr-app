import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 1238px;
    height: 810px;
    padding: 20px;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const HeadWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #f0f0f0;
    justify-content: space-between;
    margin: 20px 0 0 0;
`
export const Title = styled.h1`
    margin: 20px;
    color: gray;
`
export const SetUpDiv = styled.div`
    height: 50px;
    border: none;
    margin: 20px;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`
export const SetUp1 = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border-right: 5px dotted #f0f0f0;
`
export const SetUp2 = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border-right: 5px dotted #f0f0f0;
`
export const SetUp3 = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 20px;

`
export const SetUpText = styled.p`

`
export const SetUpInput = styled.input`
    width: 60px;
    height: 30px;
    font-size: 25px;
    text-align: center;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const SetUpButton = styled.button`
    width: 120px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    border: none;
    background-color: lightblue;
    cursor: pointer;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top :20px;
`
export const SetUpTable = styled.table`
    width: 100%;
`
export const SetUpTableHead = styled.thead`
    height: 30px;
    font-size: 25px;
`
export const SetUpTableBody = styled.tbody`
    height: 30px;
    font-size: 25px;
`
export const Tr1 = styled.tr`
`
export const Tr2 = styled.tr`
`
export const Td1 = styled.td`
    padding-left: 500px;
    width: 50px;
`
export const Td2 = styled.td`
    width: 320px;
`
export const Td3 = styled.td`
    width: 200px;
`
export const Td4 = styled.td`
    width: 150px;

`
export const TdIndex = styled.p`
    font-size: 20px;
`
export const TdKind = styled.input`
    width: 300px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const TdAmount = styled.input`
    width: 80px;
    height: 30px;
    font-size: 20px;
    text-align: right;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const StartButton = styled.button`\
    width: 120px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    border: none;
    background-color: lightblue;
    cursor: pointer;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const CardDiv = styled.div`
    max-width: 1238px; /* 부모 컴포넌트인 Container의 너비에 맞춰 최대 너비 설정 */
    width: 100%; /* 최대 너비에 맞춰 가로 길이 100%로 설정 */
    display: flex;
    flex-wrap: wrap; /* 자식 요소가 여러 줄에 걸쳐 표시될 수 있도록 설정 */
    justify-content: center;
`

export const Card = styled.div`
    width: 250px;
    height: 320px;
    margin-right: 30px;
    margin-bottom: 20px;
    perspective: 1000px;
`
export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3); 

    ${(props) =>
        props.clicked &&
        css`
            transform: rotateY(180deg);
        `}

`;
export const Back = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3); 
    font-size: 18px;
    color: #000;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`
export const Front = styled.div`
    width: 250px;
    height: 320px;
    margin-right: 30px;
    background-color: #3498db;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    backface-visibility: hidden;
    background-image: url('/imgs/weatherbackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
export const FrontText = styled.p`
    font-size: 50px;
    font-weight: 700;
`