import styled from 'styled-components';

export const MemoItem = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
`
export const WeatherImgDiv = styled.div`
    min-width: 120px;
    height: 100px;
    border: 5px solid #f0f0f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const WeatherImg = styled.img`
    width: 50%;
`
export const InfoSection = styled.div`
    flex-grow: 1;
    margin-left: 20px;
    padding: 10px;
    cursor: pointer;
    text-align: left;
`
export const DateWrapper = styled.div`
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 5px;
`
export const ContentWrapper = styled.div`
    font-size: 18px;
`
export const ButtonSection = styled.div`
    min-width: 120px;
    display: flex;
    align-items: center;
    justigy-content: center;
`
export const Button = styled.button`
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    &:hover{
        background-color: #999fff;
        color:#FFF;
        cursor: pointer;
    }
`