import React, { useState, useContext, useEffect } from 'react';
import * as S from './style/Home.style.jsx';
import Button from './Button.jsx';
import Header from './Header.jsx';
import { MemoStateContext } from '../../pages/Memo.jsx';
import { getMonthRangeByDate } from '../../util.jsx';
import MemoList from './MemoList.jsx';

const Home = () => {
    const memoData = useContext(MemoStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(pivotDate.getMonth() + 1);
    const [filteredMemoData, setFilteredMemoData] = useState([]);
    const headerTitle = `${pivotDate.getFullYear()}년 ${selectedMonth}월`;

    const increaseMonth = () => {
        const nextMonth = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1);
        setPivotDate(nextMonth);
        setSelectedMonth(nextMonth.getMonth() + 1);
    };

    const decreaseMonth = () => {
        const prevMonth = new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1);
        setPivotDate(prevMonth);
        setSelectedMonth(prevMonth.getMonth() + 1);
    };

    useEffect(() => {
        if (memoData.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            const filteredData = memoData.filter((memo) => {
                const memoMonth = new Date(memo.date).getMonth() + 1;
                return memoMonth === selectedMonth && beginTimeStamp <= memo.date && memo.date <= endTimeStamp;
            });
            setFilteredMemoData(filteredData);
        } else {
            setFilteredMemoData([]);
        }
    }, [memoData, pivotDate, selectedMonth]);

    return (
        <S.Content>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={decreaseMonth} />}
                rightChild={<Button text={">"} onClick={increaseMonth} />}
            />
            <MemoList data={filteredMemoData} selectedMonth={selectedMonth} />
        </S.Content>
    );
};

export default Home;
