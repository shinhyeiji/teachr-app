// import * as S from './style/Diary.style.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import useDiary from '../../hooks/UseDiary.jsx';
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Viewer from "./Viewer.jsx";
import { getFormattedDate } from './util.jsx'

const Diary = () => {
    const { id } = useParams();
    const data = useDiary(id);
    const { date, weatherId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const goEdit = () => {
        navigate(`/memo/edit/${id}`);
    };

    return(
        <>
            {
                !data
                ? <div>일기를 불러오고있습니다...</div>
                : (
                    <div>
                        <Header 
                            title={title}
                            leftChild={<Button text={"<뒤로 가기"} onClick={goBack} />}
                            rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                        />
                        <Viewer content={content} weatherId={weatherId} />
                    </div>
                )
            }
        </>

    )
}
export default Diary;