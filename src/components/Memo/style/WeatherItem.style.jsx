import styled from 'styled-components';

export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    border: ${props => props.active ? '5px solid lightblue' : '5px solid lightblue'}
    cursor: pointer;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    font-weight: 700;
    color: gray;
`
export const WeatherText = styled.span`
    padding: 5px 0; 

`
