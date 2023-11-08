import * as S from './style/PromiseItemComponent.style.jsx';

const PromiseItemComponent = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDelete = () => {
        onDelete(id);
    };

    return(
            <S.PromiseItem>
                <S.CheckboxDiv>
                    <S.Checkbox type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
                </S.CheckboxDiv>
                <S.Content>{content}</S.Content>
                <S.ButtonDiv>
                    <S.Button onClick={onClickDelete}>삭제</S.Button>
                </S.ButtonDiv>
            </S.PromiseItem>
            
    )
}
export default PromiseItemComponent;