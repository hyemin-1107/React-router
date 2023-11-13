import React from 'react';
import styled from 'styled-components';

const ButtonContents = (props) => {

    const { onChangePage } = props;
    const { page } = props;
    

    return (
        <ButtonContent>
            {/* <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
  &lt;
</Button> */}
            <Button onClick={() => onChangePage(1)} isSelected={page === 1}>1</Button>
            <Button onClick={() => onChangePage(2)} isSelected={page === 2}>2</Button>
            <Button onClick={() => onChangePage(3)} isSelected={page === 3}>3</Button>
            <Button onClick={() => onChangePage(4)} isSelected={page === 4}>4</Button>
            <Button onClick={() => onChangePage(5)} isSelected={page === 5}>5</Button>
            <Button onClick={() => onChangePage(6)} isSelected={page === 6}>6</Button>
            <Button onClick={() => onChangePage(7)} isSelected={page === 7}>7</Button>
            <Button onClick={() => onChangePage(8)} isSelected={page === 8}>8</Button>
            <Button onClick={() => onChangePage(9)} isSelected={page === 9}>9</Button>
            <Button onClick={() => onChangePage(10)} isSelected={page === 10}>10</Button>
            {/* <Button onClick={() => setPage(page + 1)} disabled={page === 10}>
  &gt;
</Button> */}
        </ButtonContent>
    )

};

const ButtonContent = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    margin: 50px 6px 150px;
    
    width: 40px;
    height: 40px;
    
    background: ${(props) => (props.isSelected ? "white" : "black")};
    color: ${(props) => (props.isSelected ? "black" : "white")} ;
    
    font-size: ${(props) => (props.isSelected ? "26px" : "16px")};
    font-weight: bold;
    
    border: 1px solid #666;
    border-radius: 50%;
    
    
    cursor: ${(props) => (props.isSelected ? "revert" : "pointer")};
    transition: 0.3s;

        &:hover {
            font-size: 26px;
            
            transform: ${(props) => (props.isSelected ?  "translateY(0)": "translateY(-3px)")};
            
            background: ${(props) => (props.isSelected ? "white" : "white")};
            color: ${(props) => (props.isSelected ? "black" : "black")} ;
            
            ransition: 0.3s; 
        }
`

export default ButtonContents;