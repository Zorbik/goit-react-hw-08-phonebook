import { useDispatch } from 'react-redux';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import { useState } from 'react';

import { deleteContact } from '../../redux/phoneBookOperations';
import { Box, ContactItem, EditContactForm, Spiner } from '../../components';
import { StyledButton } from './Contact.styled';

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
          <StyledButton type="button" onClick={onClick} title="Видаити контакт">
            <BsTrashFill size="20px" />
          </StyledButton>
          <StyledButton
            type="button"
            onClick={onBtnEditClick}
            title="Редагувати контакт"
          >
            <BsPencilFill size="20px" />
          </StyledButton>
        </Box>
      )}
      {modal && <EditContactForm item={item} onClose={onCloseModal} />}
    </ContactItem>
  );
};
