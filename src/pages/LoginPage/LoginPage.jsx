import { Link } from 'react-router-dom';
import { Box, LoginForm } from '../../components';

const Login = () => {
  return (
    <Box display="flex" alignItems="center" my={6} flexDirection="column">
      <LoginForm />
      <Box as="p" textAlign="center" mx={3}>
        Досі нема нашої реєстрації? Тоді тобі сюда: {'  '}
        <Link to="/registration">
          <b>Зареєструватись</b>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
