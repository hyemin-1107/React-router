import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/action';
import styled from 'styled-components';

const CounterContents = () => {

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const minusNum = () => {
    dispatch(decrease());
  };

  const plusNum = () => {
    dispatch(increase());
  };

  return (
    <Container>
      <Title>Count : {state}</Title>
      <div>
        <MinusBtn onClick={minusNum}>
          -
        </MinusBtn>
        <PlusBtn onClick={plusNum}>
          +
        </PlusBtn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`

const Title = styled.h1`
  margin-top: 100px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const MinusBtn = styled.button`
  width: 40px;
  height: 40px;
  
  border: none;
  border-radius: 5px;

  font-size: 20px;

  cursor: pointer;
`

const PlusBtn = styled.button`
  margin-left: 20px;
    
  height: 40px;
  width: 40px;
    
  border: none;
  border-radius: 5px;
 
  font-size: 20px;
    
  cursor: pointer;
`

export default CounterContents;