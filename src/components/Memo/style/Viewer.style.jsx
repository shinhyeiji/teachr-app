import styled from 'styled-components';

export const Viewer = styled.div`
    border: 5px solid #f0f0f0;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
`
export const ViewerSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ViewerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const ViewerTitle = styled.h4`
    padding: 0 20px;    
    font-size: 22px;
    font-weight: 700;
`
export const WeatherImgWrapper = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const WeatherImg = styled.div`
    width: 100%;
`
export const WeatherName = styled.div`
    width: 100px;
    font-size: 25px;
    color: gray;
`
export const ContentWrapper = styled.div`
    min-height: 550px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #f0f0f0;
    word-break: keep-all;
    overflow-wrap: break-word;
`
export const Content = styled.div`
    padding: 20px;
    font-size: 25px;
    text-align: left;
    line-height: 1.5;
`
