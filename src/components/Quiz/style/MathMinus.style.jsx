import styled from 'styled-components';

export const MathMinus = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
`
export const DirectionButtonWrapper = styled.div`
    width: 100%;
    display: flex;
`
export const DirectionButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 80px;
    height: 50px;
    margin-right: 10px;
    line-height: 10px;
    background-color:  ${props => props.active ? '#a2a2a2' : '#f0f0f0'};
    border-radius: 10px;
    border: 5px solid #f0f0f0;
    color: ${props => props.active ? '#FFF' : '#000'};
    &:hover{
        background-color: #a2a2a2;
        color:#FFF;
        cursor: pointer;
    }
`
export const Direction = styled.h2`
`
export const WidthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const Width = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
export const Number1 = styled.input`
    width: 300px;
    height: 130px;
    font-size: 100px;
    text-align: center;
`
export const Number2 = styled.input`
    width: 300px;
    height: 130px;
    font-size: 100px;
    text-align: center;
`
export const Number3 = styled.input`
    width: 300px;
    height: 130px;
    font-size: 100px;
    text-align: center;
`
export const HeightWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const Height = styled.div`
    gap: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`
export const Number4 = styled.input`
    width: 300px;
    height: 130px;
    font-size: 100px;
    text-align: right;
`
export const Number5 = styled.input`
    width: 300px;
    height: 130px;
    font-size: 100px;
    text-align: right;
`
export const Number6 = styled.input`
    width: 300px;
    height: 130px;
    font-size: 100px;
    text-align: right;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Line2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Line3 = styled.div`
    width: 400px;
    height: 7px;
    margin: 10px 0;
    background-color: #000;
`
export const Line4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Symbol = styled.h1`
    font-size: 100px;
    margin: 0 20px;
`
export const AnswerLine1 =  styled.div`
    width: 1100px;
    height: 500px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
`
export const AnswerLine2 =  styled.div`
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
export const ButtonWrapper = styled.div`
    display: flex;
`
export const ConfirmButton = styled.button`
font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
width: 80px;
height: 50px;
margin-right: 10px;
line-height: 10px;
background-color: #f0f0f0;
border-radius: 10px;
border: 5px solid #f0f0f0;
color: #000;
&:hover{
    background-color: #a2a2a2;
    color:#FFF;
    cursor: pointer;
}
`
export const ResetButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 80px;
    height: 50px;
    margin-right: 10px;
    line-height: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: 5px solid #f0f0f0;
    color: #000;
    &:hover{
        background-color: #a2a2a2;
        color:#FFF;
        cursor: pointer;
    }
`
export const Answer1 = styled.p`
    width: 300px;
    height: 300px;

`
export const Answer2 = styled.p`
    width: 300px;
    height: 300px;
    font-size: 400px;
`