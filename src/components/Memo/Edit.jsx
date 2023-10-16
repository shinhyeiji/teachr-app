import * as S from './style/Edit.style.jsx';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../../hooks/UseDiary.jsx';
import { MemoDispatchContext } from '../../pages/Memo.jsx';
import Button from './Button.jsx';
import Header from './Header.jsx';
import Editor from './Editor.jsx';


const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useDiary(id);
    const { onUpdate, onDelete } = useContext(MemoDispatchContext);
    const onClickDelete = () => {
        if(window.confirm("메모를 정말 삭제할까요? 다시 복구되지 않아요!")){
            onDelete(id);
            navigate("/memo", { replace: true })
        }
    }
    const goBack = () => {
        navigate(-1);
    };
    const onSubmit = (data) => {
        if(window.confirm("메모를 정말 수정할까요?")){
            const { date, content, weatherId } = data;
            onUpdate(id, date, content, weatherId);
            navigate("/memo", { replace: true });
        }
    }

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
                <Editor initData={data} onSubmit={onSubmit} />
            </S.Edit>
        )
    }
}
export default Edit;