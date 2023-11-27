import React from 'react';
import styled from 'styled-components';
import MainImage from './Component/Image';
import CommentSection from './Component/Comment';

const App = () => {

  return (
    <Section>
      <MainImage />
      <CommentSection />
    </Section>
  )
};

const Section = styled.div`
  display: flex;
  
  margin: 70px auto;
  gap: 50px;

  width: 1100px;   
 
  box-shadow: 15px 15px 15px grey;
`;

export default App;
