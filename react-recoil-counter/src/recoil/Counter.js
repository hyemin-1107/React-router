import { useRecoilValue, useSetRecoilState } from "recoil";
import countState from "../atom/atom";
import styled from "styled-components";

function Counter() {
    const count = useRecoilValue(countState); 
    const handleCount = useSetRecoilState(countState);

    const plusNum = () => {
        handleCount((count) => count + 1);
    };
    const minusNum = () => {
        handleCount((count) => count - 1);
    };

    return (
        <Container>
            <Title>Count : {count}</Title>
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

export default Counter;