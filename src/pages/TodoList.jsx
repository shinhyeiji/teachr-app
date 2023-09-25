import * as S from './style/TodoList.style';
import { useState, useEffect, useRef } from 'react';
import TodoHeaderComponent from '../components/TodoList/TodoHeaderComponent.jsx';
import TodoEditorComponent from '../components/TodoList/TodoEditorComponent.jsx';
import TodoListComponent from '../components/TodoList/TodoListComponent.jsx';

const TodoList = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(()=>{
        const intervalTime = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalTime);
    }, []);

    const mockTodo = [
        {
            id:0,
            isDone: false,
            time: '9시30분',
            content:'아침모임',
            createdDate: new Date().getTime(),
        },
        {
            id:1,
            isDone: false,
            time: '10시30분',
            content:'바깥놀이',
            createdDate: new Date().getTime(),
        },
        {
            id:2,
            isDone: false,
            time: '11시30분',
            content:'점심준비하기',
            createdDate: new Date().getTime(),
        },
        {
            id:3,
            isDone: false,
            time: '5시30분',
            content:'퇴근',
            createdDate: new Date().getTime(),
        }
    ]
    const [todo, setTodo] = useState([]);
    const idRef = useRef(0);

    const onCreate = (time, content) => {
        const newItem = {
            id:idRef.current,
            time,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };
    const onUpdate = (targetId) =>{
        setTodo(
            todo.map(
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
        setTodo(todo.filter((it) => it.id !== targetId));
    };
    
    return (
        <S.Container>
            <TodoHeaderComponent currentTime={currentTime} />
            <TodoEditorComponent onCreate={onCreate} />
            <TodoListComponent todo={todo} ouUpdate={onUpdate} onDelete={onDelete} />
        </S.Container>
        )
};

export default TodoList;
