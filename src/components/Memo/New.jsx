import * as S from './style/New.style.jsx';
import Editor from './Editor.jsx';
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MemoDispatchContext } from '../../pages/Memo.jsx';

const New = () => {
    const { onCreate } = useContext(MemoDispatchContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const onSubmit = (data) => {
        const { date, content, weatherId } = data;
        onCreate(date, content, weatherId);
        navigate("/memo", { replace: true });
    };

    return(
        <S.New>
            <Header 
                title={"새 메모 쓰기"}
                leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
            />
            <Editor
                onSubmit={onSubmit}
            />
        </S.New>

    )
}
export default New;