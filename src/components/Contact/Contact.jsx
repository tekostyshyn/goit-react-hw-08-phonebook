import PropTypes from 'prop-types';
import { ListItem } from './Contact.styled';

const Contact = ({ name, phone, children }) => {
  return (
    <ListItem>
      {name}: {phone}
      {children}
    </ListItem>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
