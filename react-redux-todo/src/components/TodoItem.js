import React from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { deleteTodo } from '../modules/actions';

const TodoItem = (props) => {

    // const dispatch = useDispatch();
    const { todo, onToggle, } = props;
    // const { id, } = todo;
    // // const deleteClick = () => {
    // //     dispatch(deleteTodo(id));
    // // }
    return (
        <TodoText>
            <li
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </li>
            {/* <button onClick={() => deleteClick(todo.id)}>x</button> */}
        </TodoText>
    );
};

const TodoText = styled.div`
    list-style: none;
    font-size: 22px;

    cursor: pointer;
`

export default TodoItem;