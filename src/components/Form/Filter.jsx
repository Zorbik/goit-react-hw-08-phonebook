import { useDispatch } from 'react-redux';
import { Input, Label, Box } from '../../components';
import { changeSearchQuery } from '../../redux/phoneBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeInput = e => {
    dispatch(changeSearchQuery(e.target.value));
  };

  return (
    <Box p={3}>
      <Label>
        <Input
          type="text"
          onChange={onChangeInput}
          placeholder="Знайди контакти за ім'ям"
        />
      </Label>
    </Box>
  );
};
