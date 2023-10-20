import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MemoStateContext } from '../pages/Memo';

const UseDiary = (id) => {
    const data = useContext(MemoStateContext);
    const [diary, setDiary] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            const matchDiary = data.find((it) => String(it.id) === String(id));
            if(matchDiary) {
                setDiary(matchDiary);
            } else {
                alert("메모가 존재하지 않습니다.");
                navigate("/memo", { replace: true });
            }
        }
    }, [id, data, navigate]);

    return diary;
}

export default UseDiary;
