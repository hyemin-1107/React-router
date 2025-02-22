import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { isModal, index, data, onClickButton } = props;

  return (
    <ModalWrap key={index} isModal={isModal}>
      <ModalContainer key={index.id} isModal={isModal}>
        <ModalUserId>
          UserId : {data[index].userId} Id : {data[index].id}
        </ModalUserId>
        <ModalTitle> Title : {data[index].title}</ModalTitle>
        <ModalBody>{data[index].body}</ModalBody>
        <ModalButton onClick={onClickButton}>Close</ModalButton>
      </ModalContainer>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  display: ${(props) => (props.isModal ? "block" : "none")};
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContainer = styled.div`
  display: ${(props) => (props.isModal ? "block" : "none")};

  position: relative;

  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 20px;

  overflow: hidden;

  width: 650px;
  height: 360px;

  background: #fff;
  box-shadow: 3px 3px 3px #333;

  border-radius: 10px;

  animation: modal 0.5s ease;
  @keyframes modal {
    from {
      transform: translate(-50%, -62%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
`;

const ModalButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);

  padding: 10px;

  width: 400px;

  color: #fff;
  background: #888;
  border: none;
  border-radius: 10px;

  font-size: 20px;
  font-weight: bold;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: #000;
    transition: 0.3s;
  }
`;

const ModalUserId = styled.h3`
  border-bottom: 2px solid #999;
  padding-bottom: 20px;
`;

const ModalTitle = styled.h4`
  margin: 0 22px;
`;

const ModalBody = styled.p`
  margin: 22px;
`;

export default Modal;
