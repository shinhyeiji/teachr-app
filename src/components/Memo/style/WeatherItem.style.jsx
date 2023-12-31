import styled from 'styled-components';

export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border:  ${({ active }) => active ? '5px solid lightblue' : '5px solid transparent'};
    cursor: pointer;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    font-weight: 700;
    color: gray;
    z-index: 999;
`

export const WeatherText = styled.span`
    padding: 5px 0; 

`
