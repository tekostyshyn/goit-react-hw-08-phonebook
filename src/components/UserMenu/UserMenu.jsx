import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { FiLogOut } from "react-icons/fi";
import { Container, Text, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Text>Welcome, {user.email}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <FiLogOut/>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
