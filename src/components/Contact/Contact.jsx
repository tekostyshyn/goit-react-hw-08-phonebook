import PropTypes from 'prop-types';
import { ListItem } from './Contact.styled';

const Contact = ({ name, number, children }) => {
  return (
    <ListItem>
      {name}: {number}
      {children}
    </ListItem>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
