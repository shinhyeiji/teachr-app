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
    margin: 20px 400px 20px 20px;
    color: gray;
`
export const TabList = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 200px;
    height: 50px;
    border: none;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: #f0f0f0;
    color: #000;
    &:hover{
        background-color: #999fff;
        color: #FFF;
        cursor: pointer;
    }
`;

export const Tab = styled.h1`
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
`;
