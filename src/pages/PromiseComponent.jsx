import * as S from './style/PromiseComponent.style.jsx';
import { useState, useRef } from 'react';
import PromiseEditorComponent from '../components/Promise/PromiseEditorComponent.jsx';
import PromiseListComponent from '../components/Promise/PromiseListComponent.jsx';

const PromiseComponent = () => {

    const savedPromiseData = localStorage.getItem('promiseData');
    const initialPromiseData = savedPromiseData ? JSON.parse(savedPromiseData) : [];
    const [promise, setPromise] = useState(initialPromiseData);
    localStorage.setItem('promiseData', JSON.stringify(promise));
    
    const idRef = useRef(0);

    const onCreate = (time, content) => {
        const newItem = {
            id:idRef.current,
            time,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        };
        setPromise([newItem, ...promise]);
        idRef.current += 1;
    };
    const onUpdate = (targetId) => {
        setPromise(
            promise.map(
                (it)=>{
                    if(it.id === targetId){
                        return {
                            ...it,
                            isDone: !it.isDone,
                        };
                    } else {
                        return it;
                    }
                }
            )
        )
    }
    const onDelete = (targetId) => {
        setPromise(promise.filter((it) => it.id !== targetId));
    };
    return (
        <S.Container>
            <S.HeadWrapper>
                <S.Title>우리반 약속</S.Title>
                <PromiseEditorComponent onCreate={onCreate} />
            </S.HeadWrapper>
            <S.Content>
                <PromiseListComponent promise={promise} onUpdate={onUpdate} onDelete={onDelete} />
            </S.Content>
        </S.Container>
        )
};

export default PromiseComponent;
