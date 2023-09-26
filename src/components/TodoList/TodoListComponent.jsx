import * as S from './style/TodoListComponent.style';
import TodoItemComponent from './TodoItemComponent'

const TodoListComponent = ({ todo, onUpdate, onDelete }) => {
    return(
        <S.TodoList>
            <S.ListTitle>TodoList</S.ListTitle>
            <S.ListWrapper>
                {todo.map((it)=>(
                <TodoItemComponent 
                    key={it.id}
                    {...it}
                    onUpdate={onUpdate} 
                    onDelete={onDelete} 
                />))}
            </S.ListWrapper>
        </S.TodoList>
    )
}
export default TodoListComponent;