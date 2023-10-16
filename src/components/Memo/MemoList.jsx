import * as S from './style/MemoList.style.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';
import MemoItem from './MemoItem.jsx';

const sortOptionList = [
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "오래된 순"},
]
const MemoList = ({ data }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const compare = (a, b) => {
            if(sortType === "latest") {
                return Number(b.date) - Number(a.date)
            } else {
                return Number(a.date) - Number(b.date)
            }
        }
        const copyList = JSON.parse(JSON.stringify(data));
        copyList.sort(compare);
        setSortedData(copyList);
        console.log(sortedData);
    }, [data, sortType]);


    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    const onClickNew = () => {
        navigate("/new");
    }

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
                        <Button 
                            type={"positive"} 
                            text={"새 메모 작성"}
                            onClick={onClickNew}
                        />
                </S.MenuHead>
                <S.ListWrapper>
                    {sortedData.map((it) => (
                        <MemoItem key={it.id} {...it}/>
                    ))}
                </S.ListWrapper>
            </S.MenuWrapper>
        </S.MemoList>
    )
}
export default MemoList