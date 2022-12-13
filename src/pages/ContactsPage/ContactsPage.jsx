import { useEffect, useState } from 'react';
import { BsPatchPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  ContactsList,
  Filter,
  FormInputContact,
  Loader,
} from '../../components';
import { StyledButton } from '../../components/Form/FormInputContact.styled';
import { fetchContacts } from '../../redux/phoneBookOperations';
import { getContacts, getStatus } from '../../redux/selectors';

const Contacts = () => {
  const stateContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getStatus);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoaderShown = isLoading && stateContacts?.length === 0;
  const isFilterShown = stateContacts?.length;
  const onCloseModal = () => {
    setModal(false);
  };
  const onBtnEditClick = () => {
    setModal(true);
  };

  return (
    <Box display="flex" flexWrap="wrap" my={5} mx="auto">
      <Box mx="auto">
        {isLoaderShown && <Loader />}
        <Box display="flex" justifyContent="center" alignItems="center">
          <StyledButton
            type="button"
            onClick={onBtnEditClick}
            title="Додати контакт"
          >
            {isFilterShown ? <BsPatchPlus size={30} /> : 'Додати контакт'}
          </StyledButton>
          {isFilterShown ? <Filter /> : ''}
        </Box>
        <ContactsList />
        {modal && <FormInputContact onClose={onCloseModal} />}
      </Box>
    </Box>
  );
};

export default Contacts;
