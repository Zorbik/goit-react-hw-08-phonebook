import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Label, Button, Box, Modal } from '../../components';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/phoneBookOperations';

export const FormInputContact = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const stateContacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (
      stateContacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts!`);
    } else {
      dispatch(addContact({ name, number }));

      reset();
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <Box
        px={3}
        mx="auto"
        width="px"
        display="flex"
        flexDirection="column"
        alignContent="stretch"
      >
        <Form onSubmit={onFormSubmit}>
          <Label>
            <Input
              type="text"
              value={name}
              onChange={handleInputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Як величати?"
              required
            />
          </Label>
          <Label>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Куди набирати?"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Box>
    </Modal>
  );
};
