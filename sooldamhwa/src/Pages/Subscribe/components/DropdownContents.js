import React from 'react';
import styled from 'styled-components';

const DropdownContents = (props) => {
    const { text } = props;

    return <CheckInAdvanceAnswer>{text}</CheckInAdvanceAnswer>

};

const CheckInAdvanceAnswer = styled.div`
    padding-bottom: 40px;

    font-size: 24px;
    
    color: #00000099;
`

export default DropdownContents;