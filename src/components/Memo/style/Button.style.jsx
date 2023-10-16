import styled from 'styled-components';

export const Button = styled.button`
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
    .Button_default{
        background-color: #ececec;
        color: black;
    }
    .Button_positive{
        background-color: #64c964;
        color: white;
    }
    .Button_negative{
        background-color: #fd565f;
        color: white;
    }
`