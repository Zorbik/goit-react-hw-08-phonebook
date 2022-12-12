import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, LoginForm } from '../../components';
import { getPending } from '../../redux/selectors';

const Login = () => {
  const isPending = useSelector(getPending);
  return (
    <Box display="flex" alignItems="center" my={6} flexDirection="column">
      {!isPending && (
        <>
          <LoginForm />
          <Box as="p" textAlign="center" mx={3}>
            Досі нема нашої реєстрації? Тоді тобі сюда: {'  '}
            <Link to="/registration">
              <b>Зареєструватись</b>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Login;
