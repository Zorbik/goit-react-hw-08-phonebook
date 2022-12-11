import { useSelector } from 'react-redux';
import { Box, Contact } from '../../components';
import { getContacts, getVisibleContacts } from '../../redux/selectors';

export function ContactsList() {
  const stateContacts = useSelector(getContacts);
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <Box as="ul" display="flex" flexDirection="column" px={3} width="320px">
      {stateContacts &&
        visibleContacts.map(item => <Contact key={item.id} item={item} />)}
    </Box>
  );
}
