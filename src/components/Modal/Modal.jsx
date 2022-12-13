import { useEffect } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ children, ...props }) => {
  const { onClose } = props;
  const onEscapeDown = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeDown);
    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
    // eslint-disable-next-line
  }, []);

  const onOverlayClick = e => {
    if (e.target.nodeName !== 'DIV') return;
    onClose();
  };

  return (
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>
  );
};
