import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    height: 810px;
    padding: 20px 0;
    font-family: 'Jua', cursive;
`
export const HeadWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #f0f0f0;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const Title = styled.h1`
    margin: 20px;
    color: gray;
`
export const Des = styled.h1`
    font-size: 20px;
    color: #999fff;
`
export const Content = styled.div`
    width: 1200px;
    height: 810px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Card1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    justify-content: left;
    align-items: center;
    color: #fff;
    border-radius: 30px;
    background: ${props => props.clicked ? 'lightblue' :'0%'};
    background-image: url('/imgs/check.png');
    transition: background 1s ease;
`
export const Card2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    justify-content: left;
    align-items: center;
    color: #fff;
    border-radius: 30px;
    background: ${props => props.clicked ? 'skyblue' :'0%'};
    background-image: url('/imgs/check.png');
    transition: background 1s ease;
`
export const Card3 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    justify-content: left;
    align-items: center;
    color: #fff;
    border-radius: 30px;
    background: ${props => props.clicked ? '#00BFFF' :'0%'};
    background-image: url('/imgs/check.png');
    transition: background 1s ease;
`
export const Left = styled.p`
    padding: 0 50px;
    font-size: 60px;
    color: ${props => props.clicked ? '#fff' :'#f0f0f0'};
`
export const Right = styled.p`
    font-size: 85px;
`