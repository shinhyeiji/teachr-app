import * as S from './style/Home.style.jsx';
import { useState, useContext, useEffect } from 'react';
import Button from './Button.jsx';
import Header from './Header.jsx';
import { MemoStateContext } from '../../pages/Memo.jsx';
import { getMonthRangeByDate } from './util.jsx';
import MemoList from './MemoList.jsx';

const Home = () => {
    const data = useContext(MemoStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    // 필터링한 메모를 저장할  state
    const [filteredDate, setFilteredDate] = useState([]); 
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`
    // 한 달 뒤로 업데이트
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    // 한 달 전으로 업데이트
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
    useEffect(() => {
        if(data.length >= 1){
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredDate(
                data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp)
            );
        } else {
            setFilteredDate([])
        }
    }, [data, pivotDate])
    return(
        <S.Content>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <MemoList data={data} />
        </S.Content>
    )
}
export default Home;