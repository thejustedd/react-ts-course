import EventsExample from './components/EventsExample';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список дел</NavLink>
      </div>
      <Route path='/users' exact>
        <UsersPage />
      </Route>
      <Route path='/todos' exact>
        <TodosPage />
      </Route>
      <Route path='/users/:id'>
        <UserItemPage />
      </Route>
      <Route path='/todos/:id'>
        <TodoItemPage />
      </Route>
      <hr />
      <EventsExample />
    </BrowserRouter>
  );
}

export default App;
