import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    margin: 20px;
    text-align: right;
`
export const SelectButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 200px;
    height: 50px;
    border: none;
    margin: 0 20px;
    font-size: 25px;
    background-color: ${props => props.active ? '#a2a2a2' : '#f0f0f0'};
    color: ${props => props.active ? '#FFF' : '#000'};
    &:hover{
        background-color: #a2a2a2;
        color:#FFF;
        cursor: pointer;
    }
`
export const MonthButton = styled.select`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;    
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 25px;
    margin: 0 20px;
`
export const MonthOption = styled.option`
`
