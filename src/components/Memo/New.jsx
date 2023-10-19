import * as S from './style/New.style';
import Editor from './Editor';
import Button from "./Button";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MemoDispatchContext } from '../../pages/Memo';
import { setPageTitle } from '../../util';

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
    useEffect(() => {
        setPageTitle("HappyDay :: New Memo")
    }, [])

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