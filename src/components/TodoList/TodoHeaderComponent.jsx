import * as S from './style/TodoHeaderComponent.style';
const TodoHeaderComponent = ({ currentTime }) => {

    return(
        <S.Todoheader>
            <S.Current>
                <S.Date>{currentTime.toLocaleDateString()}</S.Date>
                <S.Date>{currentTime.toLocaleTimeString()}</S.Date>
            </S.Current>
        </S.Todoheader>

    )
}
export default TodoHeaderComponent;