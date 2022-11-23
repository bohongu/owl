import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal';

const Backdrop = () => {
  const dispatch = useDispatch();
  const handleModalHide = () => {
    dispatch(modalActions.setHideModal());
  };
  return <BackdropStyled onClick={handleModalHide} />;
};

const ModalOverlay = ({ children }) => {
  return <ModalBlock>{children}</ModalBlock>;
};

const portalElement = document.getElementById('modal');

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 30vh;
  width: 350px;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
