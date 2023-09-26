import styled from 'styled-components';

export const RegisterChildren = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const RegisterTitle = styled.h1`
    width: 400px;
    margin-right: 30px;
    text-align: center;
`
export const RegisterLine = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 70px;
`
export const RegisterTeacher = styled.h2`
    text-align: left;
`
export const ModalButton = styled.button`
    width: 70px;    
    height: 70px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    background-color: #f0f0f0;
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    &:hover{
        background-color: #a2a2a2;
        color:#FFF;
        cursor: pointer;
    }
`
export const Modal = styled.div`
    position: absolute;
    z-index: 999;
    width: 1220px;
    height: 710px;
    background-color: #fff;
    top: 4.5%;
    left: 18%;
`