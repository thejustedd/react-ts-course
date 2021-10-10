import { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div>
      <input type='checkbox' defaultChecked={todo.completed} />
      <span onClick={() => onClick(todo)} style={{ cursor: 'pointer' }}>
        {todo.id}. {todo.title}
      </span>
    </div>
  );
};

export default TodoItem;
