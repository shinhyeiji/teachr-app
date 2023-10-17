import * as S from './style/Diary.style.jsx';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import useDiary from '../../hooks/UseDiary.jsx';
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Viewer from "./Viewer.jsx";
import { getFormattedDate } from './util.jsx'

const Diary = () => {
    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { date, weatherId, content } = state;
    const goBack = () => {
        navigate(-1);
    };
    const goEdit = () => {
        navigate(`/memo/edit/${id}`, { state: { weatherId, content, date }});
    };

    const title = `${getFormattedDate(new Date(Number(date)))} 기록`

    if (!state) {
        // state가 없는 경우에 대한 예외 처리
        return (
            <S.Diary>
                <Header 
                    title={title}
                    leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
                    rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                />
                <S.Content>데이터가 없습니다.</S.Content>
            </S.Diary>
            )
    }

    return(
        <>
            {
                !data
                ? (
                <S.Diary>
                    <Header 
                        title={title}
                        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
                        rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                    />
                    <S.Content>일기를 불러오고있습니다...</S.Content>
                </S.Diary>
                )
                : (
                    <S.Diary>
                        <Header 
                            title={title}
                            leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
                            rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                        />
                        <Viewer date={date} content={content} weatherId={weatherId} />
                    </S.Diary>
                )
            }
        </>

    )
}
export default Diary;