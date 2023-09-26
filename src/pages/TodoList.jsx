import * as S from './style/TodoList.style';
import { useState, useEffect, useRef } from 'react';
import TodoHeaderComponent from '../components/TodoList/TodoHeaderComponent';
import TodoEditorComponent from '../components/TodoList/TodoEditorComponent';
import TodoListComponent from '../components/TodoList/TodoListComponent';

const TodoList = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(()=>{
        const intervalTime = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalTime);
    }, []);
    
    const savedTodoData = localStorage.getItem('todoData');
    const initialTodoData = savedTodoData ? JSON.parse(savedTodoData) : [];
    const [todo, setTodo] = useState(initialTodoData);
    localStorage.setItem('todoData', JSON.stringify(todo));
    
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
    const onUpdate = (targetId) => {
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
            <TodoListComponent todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        </S.Container>
        )
};

export default TodoList;
