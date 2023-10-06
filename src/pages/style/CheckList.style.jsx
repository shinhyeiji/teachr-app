import styled from 'styled-components';

export const Container = styled.div`
    width: 1238px;
    height: 810px;
    padding: 20px;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const Head = styled.div`
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
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PrevButton  = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    height: 30px;
    border: none;
    background-color: #fff;
    font-size: 25px;
    margin-right: 10px;
    color: lightblue;
`
export const CurrentPage = styled.p`
    font-size: 25px;
    color: lightpink;
    font-weight: 700;
`
export const TotalPage = styled.p`
    font-size: 25px;
    color: lightblue;
`

export const NextButton  = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    height: 30px;
    border: none;
    background-color: #fff;
    font-size: 25px;
    margin-right: 10px;
    color: lightblue;
`
export const Save  = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    height: 35px;
    border: none;
    background-color: lightblue;
    font-size: 25px;
    margin-right: 10px;
`
export const AddButton  = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    height: 35px;
    border: none;
    background-color: lightpink;
    font-size: 25px;
`
