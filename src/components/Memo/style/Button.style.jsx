import styled from 'styled-components';

const Button = styled.button`
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
`
const ForwardedButton = styled(({ text, ...props }) => <Button {...props}>{text}</Button>)`
    shouldForwardProp: prop => !['text'].includes(prop),
`;

export { ForwardedButton as Button };