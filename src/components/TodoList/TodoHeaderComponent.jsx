import * as S from './style/TodoHeaderComponent.style.jsx';
const TodoHeaderComponent = ({ currentTime }) => {

    return(
        <S.Todoheader>
            <S.Title>오늘은📒</S.Title>
            <S.Current>
                <S.Date>{currentTime.toLocaleDateString()}</S.Date>
                <S.Date>{currentTime.toLocaleTimeString()}</S.Date>
            </S.Current>
        </S.Todoheader>

    )
}
export default TodoHeaderComponent;