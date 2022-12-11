import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { ModalWindow, Overlay } from './Modal.styled';
import { Button, Form, Input, Label } from '../../components';
import { editContact } from '../../redux/phoneBookOperations';

export const Modal = ({ item, onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const stateContacts = useSelector(getContacts);

  const onOverlayClick = e => {
    if (e.target.nodeName !== 'DIV') return;
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeDown);
    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setName(item.name);
    setNumber(item.number);
  }, [item]);

  const onEscapeDown = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

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
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>
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
          <Button type="submit">Save contact</Button>
        </Form>
      </ModalWindow>
    </Overlay>
  );
};
