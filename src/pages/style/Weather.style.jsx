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
export const WeatherSite = styled.h1`
    text-decoration: none;
    font-size: 20px;
    color: #999fff;
    font-weight: 700;
`
export const Content = styled.div`
    width: 1200px;
    height: 810px;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
`
export const OutWeather = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const WeatherTitle = styled.p`
    font-size: 30px;
    margin-bottom: 15px;
`
export const WeatherWrapper = styled.div`
`
export const WeatherButton = styled.button`
    width: 50px;
    border: 4px solid #f0f0f0;
    border-radius: 100%;
    background-color: #fff;
    margin-right: 10px;
    cursor: pointer;
`
export const WeatherImg = styled.img`
    width: 100%;
    border-radius: 20px;
`
export const Description = styled.p`
    font-size: 30px;
    color: gray;
`
export const SelectedWeather = styled.div`
    width: 400px;
    margin-top: 50px;
`
export const Pollute = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PolluteWrapper = styled.div`

`
export const PolluteButton = styled.button`
    width: 50px;
    border: 4px solid #f0f0f0;
    border-radius: 100%;
    background-color: #fff;
    margin-right: 10px;
    cursor: pointer;
`
export const AirCondition = styled.img`
    width: 100%;
    border-radius: 100%;
`
export const SelectedPollute = styled.div`
    width: 400px;
    margin-top: 50px;
`
