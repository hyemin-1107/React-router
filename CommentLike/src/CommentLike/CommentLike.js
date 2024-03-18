import React from 'react';
import styled from 'styled-components';
import MainImage from './component/Image';
import CommentSection from './component/Comment';

const CommentLike = () => {

  return (
    <Section>
      <MainImage />
      <CommentSection />
    </Section>
  )
};

const Section = styled.div`
  display: flex;
  
  margin: 150px auto;
  gap: 50px;

  width: 1100px;   
 
  box-shadow: 15px 15px 15px grey;
`;

export default CommentLike;
