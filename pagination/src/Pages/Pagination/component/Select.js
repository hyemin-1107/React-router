import React from 'react';
import styled from 'styled-components';


const SelectBox = (props) => {

    const { onChangeLimit } = props;
    const { limit } = props;

    return (
        <Select type="number" onChange={(e) => onChangeLimit(e)} value={limit} >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </Select>
    )

};
const Select = styled.select`
    padding: 7px;

    width: 80px;
`
export default SelectBox;