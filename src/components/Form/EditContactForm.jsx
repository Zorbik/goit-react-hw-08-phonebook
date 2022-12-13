import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getContacts } from '../../redux/selectors';
import { editContact } from '../../redux/phoneBookOperations';
import { Button, Form, Input, Label, Modal } from '../../components';

export const EditContactForm = ({ item, onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const stateContacts = useSelector(getContacts);

  useEffect(() => {
    setName(item.name);
    setNumber(item.number);
  }, [item]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const onFormSubmit = e => {
    const { id } = item;
    e.preventDefault();
    if (
      stateContacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts!`);
    } else {
      dispatch(editContact({ id, name, number }));
      onClose();
    }
  };
  return (
    <Modal onClose={onClose}>
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
        <Button type="submit" title="Зберегти контакт">
          Save contact
        </Button>
      </Form>
    </Modal>
  );
};
