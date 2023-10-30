import React from 'react';
import styled from 'styled-components';

const UserInput = (props) => {

    const { onChange } = props;

    return (
        <>
            <div>
                <div>Usename or email address</div>
                <Input name='id' onChange={(e) => onChange(e)} />
            </div>
            <div>
                <div>Password</div>
                <Input name='pw' type='password' onChange={(e) => onChange(e)} />
            </div>
        </>
    )

};

const Input = styled.input`
    box-sizing: border-box;
    
    margin: 16px 0;    
    padding:6px;
    
    width:100%;
`;


export default UserInput;