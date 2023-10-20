import React, { useState, useContext, useEffect } from 'react';
import * as S from './style/Home.style';
import Button from './Button';
import Header from './Header';
import { MemoStateContext } from '../../pages/Memo';
import { getMonthRangeByDate } from '../../util';
import MemoList from './MemoList';

const Home = () => {
    const memoData = useContext(MemoStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(pivotDate.getMonth() + 1);
    const [filteredData, setFilteredData] = useState([]);

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
            setFilteredData(filteredData);
        } else {
            setFilteredData([]);
        }
    }, [memoData, pivotDate, selectedMonth]);

    return (
        <S.Content>
            <Header
                title={`${pivotDate.getFullYear()}년 ${selectedMonth}월`}
                leftChild={<Button text={"<"} onClick={decreaseMonth} />}
                rightChild={<Button text={">"} onClick={increaseMonth} />}
            />
            <MemoList memoData={filteredData} selectedMonth={selectedMonth} />
        </S.Content>
    );
};

export default Home;
