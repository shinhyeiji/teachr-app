import * as S from './style/Button.style';

const Button = ({text, onClick}) => {
    return(
        <S.Button 
            text={text}
            onClick={onClick}
        >
            {text}
        </S.Button>
    )
}

export default Button;