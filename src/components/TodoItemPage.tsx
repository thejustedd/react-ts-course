import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ITodo } from '../types/types';

interface TodoItemPageParams {
  id: string;
}

const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<TodoItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>(
        'https://jsonplaceholder.typicode.com/todos/' + params.id
      );
      setTodo(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    history.push('/todos');
  }

  return (
    <div>
      <button onClick={clickHandler}>Back</button>
      <h1>Дело номер {todo?.id}</h1>
      <input type='checkbox' defaultChecked={todo?.completed} />
      {todo?.title}
      <h3>Детальное описание дела</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        possimus totam illum enim, in quos voluptatem ipsam, nisi velit ullam
        eligendi mollitia amet debitis voluptatum ut? Ratione debitis
        dignissimos dolores.
      </p>
    </div>
  );
};

export default TodoItemPage;
