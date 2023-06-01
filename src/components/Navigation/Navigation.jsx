import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className="link" to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
