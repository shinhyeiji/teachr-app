import styled from 'styled-components';

export const TotalMain = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    border-radius: 10px;
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justift-content: space-around;
    align-items: flex-end;
    border-radius: 10px;
    padding-bottom: 15px;
    margin-bottom: 40px;
    background-image: url('/imgs/weatherbackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
export const DateTitle = styled.h2`
    width: 23%;
    font-size: 90px;
    color: #fff;
    margin: 10px 0 0 50px;
`
export const DateContent = styled.div`
    width: 77%;
    text-align: right;
    margin-right: 40px;
    display: flex;
    align-items: flex-end;

`
export const CurrentDate = styled.span`
    width: 68%;
    font-size: 50px;
    font-weight: 700;
`
export const CurrentTime = styled.span`
    width: 32%;
    font-size: 50px;
    font-weight: 700;
    color:  gray;
`
export const Content = styled.div`
    width: 1200px;
    height: 810px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Div = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const DivTitle1 = styled.img`
`
export const DivTitle2 = styled.img`
`
export const DivTitle3 = styled.img`
`
export const DivContent1 = styled.div`
    width: 90%;
    min-height: 500px;
    border: 5px solid #ffde59;
    border-radius: 10px;
    font-size: 40px;
`
export const DivContent2 = styled.div`
    width: 90%;
    min-height: 500px;
    border: 5px solid #a1d3d2;
    border-radius: 10px;
    font-size: 40px;
`
export const DivContent3 = styled.div`
    width: 90%;
    min-height: 500px;
    border: 5px solid #ffceec;
    border-radius: 10px;
    font-size: 40px;
`