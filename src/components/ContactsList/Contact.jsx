import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phoneBookOperations';
import { Button, ContactItem } from '../../components';
import { useState } from 'react';
import { Spiner } from '../../components';

export const Contact = ({ item }) => {
  const { id, name, number } = item;
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

  return (
    <ContactItem>
      {name}: {number}
      {isDeleting ? (
        <Spiner />
      ) : (
        <Button type="button" onClick={onClick} disabled={isDeleting}>
          Delete
        </Button>
      )}
    </ContactItem>
  );
};
