import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import Contact from 'components/Contact';
import { Button, List } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number}>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </>
  );
};

export default ContactsList;
