import React from "react";
import Feedimage from "../../img/img.jpeg";
import styled from "styled-components";

const MainImage = () => {
  return (
    <>
      <FeedImage src={Feedimage} alt="image" />
    </>
  );
};

const FeedImage = styled.img`
  display: block;

  width: 600px;
  height: 500px;
`;

export default MainImage;
