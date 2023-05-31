import './Contact.scss';
import PropTypes from 'prop-types';

const Contact = ({ name, phone, children }) => {
  return (
    <li className="contacts-list__item">
      {name}: {phone}
      {children}
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
