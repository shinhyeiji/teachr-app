import * as S from './style/TodoEditorComponent.style.jsx';
import { useRef, useState } from 'react';

const TodoEditorComponent = ({ onCreate }) => {
    const [ content, setContent ] = useState('');
    const [ time, setTime ] = useState('');
    const inputRef = useRef();

    const onChangeTime = (e) => {
        setTime(e.target.value)
    }
    const onChangeContent = (e) =>{
        setContent(e.target.value)
    }
    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(time, content);
        setTime('');
        setContent('');
    }
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    return(
        <S.EditorWrapper>
            <S.EditorTitle>오늘 할 일 작성하기✏️</S.EditorTitle>
            <S.AddTodo>
                <S.AddTimeInput
                    ref={inputRef}
                    value={time}
                    onChange={onChangeTime}
                    placeholder="실행시간"
                />
                <S.AddTodoInput
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="오늘은 얼마나 많은 일이...>_<"
                />
                <S.AddTodoButton onClick={onSubmit}>추가😭</S.AddTodoButton>
            </S.AddTodo>
        </S.EditorWrapper>
    )
}
export default TodoEditorComponent;