import React from "react";
import styled from "styled-components";

const Modal = ({ children, state, changeState, icono }) => {
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <span>{icono}</span>
            </ModalHeader>

            <CloseBtn onClick={() => changeState(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseBtn>

            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background:  rgba(0,0,0,.5) 
  padding: 40px;
  display: flex;
  align-items:  center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  background: #d1c1d7;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;

  span {
    display: flex;

    justify-content: center;

    width: 100%;
    height: 100%;
    margin-top: 30px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #3336ff;
  &:hover {
    background: #85c1e9;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
