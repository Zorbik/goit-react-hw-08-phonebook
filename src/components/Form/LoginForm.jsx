import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '../../components';
import { logInUser } from '../../redux/userAuthOperations';
import { Button, Form, Input, Label } from './FormInputContact.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();

    dispatch(logInUser({ email, password }));
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
            type="email"
            name="email"
            onChange={onInputChange}
            value={email}
            placeholder="Куди слати листи?"
            required
          />
        </Label>
        <Label>
          <Input
            type="password"
            name="password"
            onChange={onInputChange}
            value={password}
            placeholder="*******"
            required
          />
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    </Box>
  );
};
