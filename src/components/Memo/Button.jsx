import * as S from './style/Button.style.jsx';

const Button = ({text, type, onClick}) => {
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return(
            <S.Button 
                className={["Button", `Button_${btnType}`].join(" ")} 
                onClick={onClick}
            >
                {text}
            </S.Button>
    )
}

export default Button;