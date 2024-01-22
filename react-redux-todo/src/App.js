import React from "react";
import styled from "styled-components";
import TodosContainer from "./components/container";

function App() {
  return (
    <Container>
      <Wrapper>
        <h1>TODO LIST</h1>
        <TodosContainer />
      </Wrapper>
    </Container>
  );
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 200vh;

  background: #666;

  input {
    appearance: none;
    outline-style: none;
    border: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
  margin-top: 120px;

  h1{
    font-weight: 800;
    font-size: 44px;

    color: #fff;
    text-shadow: -3px 3px cadetblue, 3px 3px cadetblue;
    /* -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: cadetblue;   */
  }
`;