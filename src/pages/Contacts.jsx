import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import { Container, Title, Subtitle } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Phonebook</Title>
      <Container>
        <div>
          <Subtitle>Add new contact or update existing</Subtitle>
          <ContactForm />
          <Filter />
        </div>
        <div>
        <Subtitle>List of your contacts</Subtitle>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactsList />
        </div>
      </Container>
    </div>
  );
}
