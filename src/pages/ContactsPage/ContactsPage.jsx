import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  ContactsList,
  Filter,
  FormInputContact,
  Loader,
} from '../../components';
import { fetchContacts } from '../../redux/phoneBookOperations';
import { getContacts, getStatus } from '../../redux/selectors';

const Contacts = () => {
  const stateContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoaderShown = isLoading && stateContacts?.length === 0;
  const isFilterShown = stateContacts?.length;

  return (
    <Box display="flex" flexWrap="wrap" my={5}>
      <FormInputContact />
      <Box>
        {isLoaderShown && <Loader />}
        {isFilterShown ? <Filter /> : ''}
        <ContactsList />
      </Box>
    </Box>
  );
};

export default Contacts;
