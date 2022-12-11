import { Box } from '../../components';

const Home = () => {
  return (
    <Box as="main" display="flex" justifyContent="center">
      <Box as="h1" textAlign="center" mt={6}>
        Hello! It's just a phonebook
      </Box>
    </Box>
  );
};

export default Home;
