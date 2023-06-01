import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import { nanoid } from 'nanoid';
import { Container, Label, Input } from './Filter.styled';

const Filter = () => {
  const inputId = nanoid();
  const dispatch = useDispatch();

  return (
    <Container>
      <Label htmlFor={inputId}>Find contacts by name</Label>
      <Input
        type="text"
        name="input"
        id={inputId}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </Container>
  );
};

export default Filter;
