import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = (props) =>{
 
    const { todos, onToggle, } = props;
 
    return (
    <TextContainer>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </TextContainer>
  );
};

const TextContainer = styled.div`
    text-align: center;

    margin-top: 10px;
    padding: 20px;
    
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.8);
`

export default TodoList;