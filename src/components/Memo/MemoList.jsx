import * as S from './style/MemoList.style';
import { useState,  useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import MemoItem from './MemoItem';
import { MemoStateContext } from '../../pages/Memo';

const sortOptionList = [
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "오래된 순"},
]
const MemoList = ({ data, selectedMonth }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const dataByMonth = useContext(MemoStateContext);


    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    const onClickNew = () => {
        navigate("/memo/new");
    }
    const sortedMemos = dataByMonth[selectedMonth] ? [...dataByMonth[selectedMonth]] : [];
    sortedMemos.sort((a, b) => {
        if (sortType === "latest") {
            return Number(b.date) - Number(a.date);
        } else {
            return Number(a.date) - Number(b.date);
        }
    });

    return(
        <S.MemoList>
            <S.MenuWrapper>
                <S.MenuHead>
                    <S.LeftCol>
                        <S.SelectMenu value={sortType} onChange={onChangeSortType}>
                            {sortOptionList.map((it, index) => (
                                <S.OptionMenu key={index} value={it.value}>
                                    {it.name}
                                </S.OptionMenu>
                            ))}
                        </S.SelectMenu>
                    </S.LeftCol>
                    <S.RightCol>
                        Memo List
                    </S.RightCol>
                    <Button type={"positive"} text={"새 메모 작성"} onClick={onClickNew} />
                </S.MenuHead>
                <S.ListWrapper>
                {sortedMemos.map((memo) => (
                    <MemoItem
                        key={memo.id}
                        id={memo.id}
                        weatherId={memo.weatherId}
                        content={memo.content}
                        date={memo.date}
                    />
                ))}
                </S.ListWrapper>
            </S.MenuWrapper>
        </S.MemoList>    
    )
}
export default MemoList