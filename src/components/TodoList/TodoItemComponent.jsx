import * as S from './style/TodoItemComponent.style';

const TodoItemComponent = ({ id, time, content, isDone, createdDate, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDelete = () => {
        onDelete(id);
    };

    return(
            <S.TodoItem>
                <S.CheckboxDiv>
                    <S.Checkbox type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
                </S.CheckboxDiv>
                <S.Time>{time}</S.Time>
                <S.Content>{content}</S.Content>
                <S.ButtonDiv>
                    <S.Button onClick={onClickDelete}>삭제</S.Button>
                </S.ButtonDiv>
            </S.TodoItem>
            
    )
}
export default TodoItemComponent;