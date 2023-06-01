import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    const checkedContacts = contacts.find(contact => contact.name === name);
    if (checkedContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  const nameInpudId = nanoid();
  const numberInpudId = nanoid();
  return (
    <Form action="" onSubmit={handleSubmit}>
      <Label htmlFor={nameInpudId} c>
        Name
      </Label>
      <Input
        type="text"
        name="name"
        id={nameInpudId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberInpudId} c>
        Number
      </Label>
      <Input
        type="tel"
        name="number"
        id={numberInpudId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
