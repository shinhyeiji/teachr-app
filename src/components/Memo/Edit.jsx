import * as S from './style/Edit.style';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import useDiary from '../../hooks/UseDiary';
import { MemoDispatchContext } from '../../pages/Memo';
import Button from './Button';
import Header from './Header';
import Editor from './Editor';
import { setPageTitle } from '../../util';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useDiary(id);
    const { onUpdate, onDelete } = useContext(MemoDispatchContext);
    const location = useLocation();
    const { state } = location;
    const { date, weatherId, content } = state;
    
    const onClickDelete = () => {
        if(window.confirm("메모를 정말 삭제할까요? 다시 복구되지 않아요!")){
            onDelete(id);
            navigate("/memo", { replace: true })
        }
    }
    const goBack = () => {
        navigate(-1);
    };
    const onSubmit = (memo) => {
        if(window.confirm("메모를 정말 수정할까요?")){
            onUpdate(memo.id, memo.date, memo.content, memo.weatherId);
            navigate("/memo", { replace: true });
        }
    }
    useEffect(() => {
        setPageTitle("HappyDay :: Memo Edit")
    }, [])
    if(!data) {
        return <S.Edit>일기를 불러오고 있습니다...</S.Edit>;
    } else {
        return(
            <S.Edit>
                <Header 
                    title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
                    rightChild={<Button type={"negative"} text={"삭제하기"} onClick={onClickDelete} />}
                />
                <Editor id={id} date={date} weatherId={weatherId} content={content} onSubmit={onSubmit} />
            </S.Edit>
        )
    }
}
export default Edit;