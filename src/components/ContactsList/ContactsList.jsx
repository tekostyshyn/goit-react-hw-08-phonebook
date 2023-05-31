import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { selectFilter } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/operations';

import Contact from 'components/Contact';
import './ContactsList.scss';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className="contacts-list">
        {visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone}>
            <button
              className="contacts-list__button"
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </Contact>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
