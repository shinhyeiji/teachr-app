import * as S from './style/PromiseEditorComponent.style.jsx';
import { useRef, useState } from 'react';

const PromiseEditorComponent = ({ onCreate }) => {
    const [ content, setContent ] = useState('');
    const [ time, setTime ] = useState('');
    const inputRef = useRef();

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
            <S.AddPromise>
                <S.AddPromiseInput
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="오늘의 약속을 추가하세요."
                />
                <S.AddPromiseButton onClick={onSubmit}>추가</S.AddPromiseButton>
            </S.AddPromise>
        </S.EditorWrapper>
    )
}
export default PromiseEditorComponent;