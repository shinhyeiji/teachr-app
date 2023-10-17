import * as S from './style/Memo.style.jsx';
import React, { useReducer, useRef, useEffect, useState, useMemo } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Memo/Home.jsx';
import New from '../components/Memo/New.jsx';
import Diary from '../components/Memo/Diary.jsx';
import Edit from '../components/Memo/Edit.jsx';

const initialState = localStorage.getItem("memo") ? JSON.parse(localStorage.getItem("memo")) : [];

function reducer(state = initialState, action){
    switch(action.type){
        case "INIT": {
            return action.data;
        }
        case "CREATE": {
            const newState = [action.data, ...state];
            localStorage.setItem("memo", JSON.stringify(newState))
            return newState;
        }
        case "UPDATE": {
            const newState = state.map((it) =>
                String(it.id) === String(action.data.id) ? { ...action.data } : it
            );
            localStorage.setItem("memo", JSON.stringify(newState));
            return newState;
        }
        case "DELETE": {
            const newState = state.filter(
                (it) => String(it.id) !== String(action.targetId)
            );
            localStorage.setItem("memo", JSON.stringify(newState));
            return newState;
        }
        default: {
            return state;
        }
    }
}

// props drilling없이 useContext를 이용해 업데이트 함수를 꺼내쓸 수 있음.
// State값을 공급하기 위한 객체
export const MemoStateContext = React.createContext();
// State를 업데이트 하는 함수
export const MemoDispatchContext = React.createContext();

const Memo = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    const onCreate = (date, content, weatherId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
                month: new Date(date).getMonth() + 1,
                date: new Date(date).getTime(),
                content,
                weatherId,
            },
        });
        idRef.current += 1;
    };
    const onUpdate = (targetId, date, content, weatherId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: targetId,
                month: new Date(date).getMonth() + 1,
                date: new Date(date).getTime(),
                content,
                weatherId,
            },
        });
    };
    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    };

    const sortedDataByMonth = useMemo(() => {
        const sortedData = [...data];
        sortedData.sort((a, b) => b.date - a.date); // 최신순으로 정렬
        return sortedData.reduce((acc, memo) => {
            const memoMonth = new Date(memo.date).getMonth() + 1;
            if (!acc[memoMonth]) {
                acc[memoMonth] = [];
            }
            acc[memoMonth].push(memo);
            return acc;
        }, {});
    }, [data]);

    useEffect(() => {
        const rawData = localStorage.getItem("memo");
        if (rawData) {
            const localData = JSON.parse(rawData);
            if (localData.length > 0) {
                const maxId = Math.max(...localData.map(memo => memo.id));
                idRef.current = maxId + 1;
                dispatch({ type: "INIT", data: localData });
            }
        }
        setIsDataLoaded(true);
    }, []);
    
    return(
        <MemoStateContext.Provider value={sortedDataByMonth}>
            <MemoDispatchContext.Provider
                value={{
                    onCreate,
                    onUpdate,
                    onDelete,
                }}
            >
                <S.Container>
                    {
                        !isDataLoaded 
                        ? (<div>데이터를 불러오는 중입니다...</div>) 
                        : (
                            <Routes>
                                <Route path="/memo" element={<Home />} />
                                <Route path="/memo/new" element={<New />} />
                                <Route path="/memo/diary/:id" element={<Diary />} />
                                <Route path="/memo/edit/:id" element={<Edit />} />
                            </Routes>
                        )
                    }
                </S.Container>
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    )
}
export default Memo;