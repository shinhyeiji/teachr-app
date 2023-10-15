import styled from 'styled-components';

export const Editor = styled.div`
    width: 100%;
`
export const EditorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin: 40px 0;
`
export const EditorDate = styled.div`
    display: flex;
    gap: 30px;
`
export const SubTitle = styled.h4`
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    align-self: center;
`
export const InputWrapper = styled.div`

`
export const DateInput = styled.input`
    border: none;
    border-radius: 5px;
    padding: 40px 30px;
    cursor: pointer;
    border: 5px solid #f0f0f0;
    border-radius: 5px;
    font-size: 25px;
    font-weight: 700;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`

export const EditorWeather = styled.div`
    display: flex;
    gap: 30px;
`
export const WeatherWrapper = styled.div`
    padding: 5px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 5px solid #f0f0f0;
    border-radius: 5px;
`

export const EditorDiary = styled.div`
    margin-bottom: 40px;
    padding: 0 10px;

`
export const ContentInput = styled.textarea`
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    padding: 20px;
    width: 100%;
    min-height: 400px;
    box-sizing: border-box;
    resize: vertical;
    font-size: 30px;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`
export const EditorSuccess = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-weight: 700;
`