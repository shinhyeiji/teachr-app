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
    background-color: #999fff;
    color: #fff;
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
export const StartButton = styled.button`
    width: 120px;
    height: 40px;
    font-size: 25px;
    text-align: center;
    border: none;
    background-color: #999fff;
    color: #fff;
    cursor: pointer;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const CardDiv = styled.div`
    max-width: 1238px;
    width: 100%;
    display: flex;
    flex-display: column;
    flex-wrap: wrap;
    justify-content: center;
`
export const Card = styled.div`
    width: 100%;
    height: 320px;
    margin-right: 30px;
    margin-bottom: 20px;
    perspective: 1000px;
`

export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3); 
`;
export const Back = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3); 
    font-size: 50px;
    color: #000;
    font-size: 200px;
    background-color: lightblue;
    backface-visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
export const Front = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 30px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: ${props => props.clicked ? '0%' : 'lightpink'};
    color: ${props => props.clicked ? '#fff' : '0%'};
    backface-visibility: hidden;
    transition: background 1s ease;
    z-index: 999;
`;

export const FrontText = styled.p`
    width: 100%;
    height: 100%;
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    font-size: 30px;
`