import { useDispatch } from 'react-redux';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/phoneBookOperations';
import { Box, ContactItem } from '../../components';
import { useState } from 'react';
import { Spiner } from '../../components';
import { StyledButton } from './Contact.styled';
import { Modal } from '../Modal/Modal';

export const Contact = ({ item }) => {
  const { id, name, number } = item;
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);
  const onClick = () => {
    try {
      setIsDeleting(true);
      dispatch(deleteContact(id));
    } catch (error) {
      console.log('error', error);
    }
  };

  const onCloseModal = () => {
    setModal(false);
  };
  const onBtnEditClick = () => {
    setModal(true);
  };

  return (
    <ContactItem data-id={id}>
      {name}: {number}
      {isDeleting ? (
        <Spiner />
      ) : (
        <Box display="flex">
          <StyledButton type="button" onClick={onClick} disabled={isDeleting}>
            <BsTrashFill size="20px" />
          </StyledButton>
          <StyledButton type="button" onClick={onBtnEditClick}>
            <BsPencilFill size="20px" />
          </StyledButton>
        </Box>
      )}
      {modal && <Modal item={item} onClose={onCloseModal} />}
    </ContactItem>
  );
};
