import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const Todos = (props) => {
    const { todos, onCreate, onToggle } = props;

    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);
    
    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText(''); // 인풋 초기화
    };

    return (
        <div>
            <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
                <Input
                    value={text}
                    placeholder="할 일을 입력하세요"
                    onChange={onChange}
                />
                <Button type="submit">추가하기</Button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

const Input = styled.input`
    margin-right: 9px;
    padding: 0 10px;

    width: 340px;
    height: 35px;

    font-size: 15px;

    border-radius: 30px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.8);
`

const Button = styled.button`
    width: 72px;
    height: 35px;

    font-weight: bold;

    border-radius: 30px;
    border: none;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.8);
    background-color: cadetblue;
    color: #fff;

    cursor: pointer;

    &:hover{
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 1);
        opacity: .9;
    }
`

export default Todos;