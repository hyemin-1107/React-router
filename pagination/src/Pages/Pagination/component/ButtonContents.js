import React from 'react';
import styled from 'styled-components';

const ButtonContents = (props) => {

    const { onChangePage } = props;
    const { page } = props;

    const ButtonArray = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
    ];

    return (
        <ButtonContent>
            {/* <Button onClick={() => onChangePage(1)} isSelected={page === 1}>1</Button>
            <Button onClick={() => onChangePage(2)} isSelected={page === 2}>2</Button>
            <Button onClick={() => onChangePage(3)} isSelected={page === 3}>3</Button>
            <Button onClick={() => onChangePage(4)} isSelected={page === 4}>4</Button>
            <Button onClick={() => onChangePage(5)} isSelected={page === 5}>5</Button>
            <Button onClick={() => onChangePage(6)} isSelected={page === 6}>6</Button>
            <Button onClick={() => onChangePage(7)} isSelected={page === 7}>7</Button>
            <Button onClick={() => onChangePage(8)} isSelected={page === 8}>8</Button>
            <Button onClick={() => onChangePage(9)} isSelected={page === 9}>9</Button>
            <Button onClick={() => onChangePage(10)} isSelected={page === 10}>10</Button> */}
            
            {ButtonArray.map((el) => {
                return (
                    <Button onClick={() => onChangePage(el.id)} isSelected={page === el.id}>
                        {el.id}
                    </Button>
                )
            })}
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
            
            transform: ${(props) => (props.isSelected ? "translateY(0)" : "translateY(-3px)")};
            
            background: ${(props) => (props.isSelected ? "white" : "white")};
            color: ${(props) => (props.isSelected ? "black" : "black")} ;
            
            transition: 0.3s; 
        }
`

export default ButtonContents;