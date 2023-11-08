import styled from 'styled-components';

export const TotalMain = styled.div`
    width: 1200px;
    height: 700px;

    display: flex;
    flex-direction: column;
    justift-content: center;
    align-items: center;
    padding: 50px 0;
    border-radius: 10px;
    gap: 30px;
`
export const Date = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justift-content: space-around;
    align-items: flex-end;
    margin-top: 20px;
    margin-bottom: 80px;
    background-image: url('/imgs/weatherbackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
export const DateTitle = styled.h2`
    width: 23%;
    font-size: 100px;
    color: #fff;
    margin: 30px 0 0 30px;
`
export const DateContent = styled.div`
    width: 77%;
    text-align: right;
    margin: 40px 40px 0 0;
    display: flex;
    align-items: flex-end;

`
export const CurrentDate = styled.span`
    width:  68%;
    font-size: 60px;
    font-weight: 700;
`
export const CurrentTime = styled.span`
    width:  32%;
    font-size: 50px;
    font-weight: 700;
    color:  gray;
`
export const Content = styled.div`
    width: 1200px;
    height: 810px;
    padding: 20px 0;
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
    height: 100%;
    border: 5px solid #ffde59;
    border-radius: 10px;
    font-size: 40px;
`
export const DivContent2 = styled.div`
    width: 90%;
    height: 100%;
    border: 5px solid #a1d3d2;
    border-radius: 10px;
    font-size: 40px;
`
export const DivContent3 = styled.div`
    width: 90%;
    height: 100%;
    border: 5px solid #ffceec;
    border-radius: 10px;
    font-size: 40px;
`