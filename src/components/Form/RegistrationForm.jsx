import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '../../components';
import { createNewUser } from '../../redux/userAuthOperations';
import { Button, Form, Input, Label } from './FormInputContact.styled';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  //   const stateContacts = useSelector(getContacts);

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onFormSubmit = e => {
    e.preventDefault();

    dispatch(createNewUser({ name, email, password }));

    reset();
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <Box px={3} width="320px">
      <Form onSubmit={onFormSubmit}>
        <Label>
          <Input
            onChange={onInputChange}
            value={name}
            type="name"
            name="name"
            placeholder="Як звати?"
            required
          />
        </Label>
        <Label>
          <Input
            onChange={onInputChange}
            type="email"
            name="email"
            value={email}
            placeholder="Куди слати листи?"
            required
          />
        </Label>
        <Label>
          <Input
            onChange={onInputChange}
            type="password"
            name="password"
            value={password}
            placeholder="*******"
            required
          />
        </Label>
        <Button type="submit">Зареєструватись</Button>
      </Form>
    </Box>
  );
};
