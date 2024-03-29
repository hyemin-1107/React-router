import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from './Todos';
import { addTodo, toggleTodo, deleteTodo } from '../modules/actions';

function TodosContainer() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos 
  todos={todos} 
  onCreate={onCreate} 
  onToggle={onToggle} 
  deleteTodo={deleteTodo} />;
}

export default TodosContainer;