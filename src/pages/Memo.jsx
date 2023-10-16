import * as S from './style/Memo.style.jsx';
import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import Home from '../components/Memo/Home.jsx';
import New from '../components/Memo/New.jsx';
import Diary from '../components/Memo/Diary.jsx';
import Edit from '../components/Memo/Edit.jsx';
import Header from '../components/Memo/Header.jsx';
import Button from '../components/Memo/Button.jsx';

function reducer (state, action) {
    switch(action.type){
        case "CREATE": {
            return [action.data, ...state];
        }
        case "UPDATE": {
            return state.map((it) => 
                String(it.id) === String(action.data.id) ? {...action.data} : it
            );
        }
        case "DELETE": {
            return state.filter((it) => String(it.id) !== String(action.targetId));
        }
        case "INIT": {
            return action.data;
        }
        default: {
            return state;
        }
    }
}
const mockData = [
    {
        id:"mock1",
        date: new Date().getTime() - 1,
        content: "mockContent1",
        weatherId: 1,
    },
    {
        id:"mock2",
        date: new Date().getTime() - 3,
        content: "mockContent2",
        weatherId: 3,
    },
    {
        id:"mock3",
        date: new Date().getTime() - 4,
        content: "mockContent3",
        weatherId: 2,
    },
    {
        id:"mock4",
        date: new Date().getTime()-2,
        content: "mockContent4",
        weatherId: 1,
    },
]
// props drilling없이 useContext를 이용해 업데이트 함수를 꺼내쓸 수 있음.
// State값을 공급하기 위한 객체
export const MemoStateContext = React.createContext();
// State를 업데이트 하는 함수
export const MemoDispatchContext = React.createContext();

const Memo = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("sort"));
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        dispatch({
            type: "INIT",
            data: mockData,
        });
        setIsDataLoaded(true);
    }, []);
    
    const onCreate = (date, content, weatherId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
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

    return(
        <MemoStateContext.Provider value={data}>
            <MemoDispatchContext.Provider
                value={{
                    onCreate,
                    onUpdate,
                    onDelete,
                }}
            >
                <S.Container>
                    {/* <Header
                        title={"Home"}
                        leftChild={
                            <Button
                                type="positive"
                                text={"긍정 버튼"}
                                onClick={()=>{
                                    alert("positive button");
                                }}
                            />}
                        rightChild={
                            <Button
                                type="negative"
                                text={"부정 버튼"}
                                onClick={()=>{
                                    alert("negative button");
                                }}
                            />}
                    /> */}
                    {
                        !isDataLoaded 
                        ? (<div>데이터를 불러오는 중입니다...</div>) 
                        : (
                            <Routes>
                                <Route path="/home" element={<Home />} />
                                <Route path="/new" element={<New />} />
                                <Route path="/diary/:id" element={<Diary />} />
                                <Route path="/edit/:id" element={<Edit />} />
                            </Routes>
                        )
                    }

                    {/* <S.LinkWrap>
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/new"}>New</Link>
                        <Link to={"/diary"}>Diary</Link>
                        <Link to={"/edit"}>edit</Link>
                    </S.LinkWrap> */}
                </S.Container>
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    )
}
export default Memo;