import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';

 const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <input type="email" name="email" required/>
      </Label>
      <Label>
        Password
        <input type="password" name="password" required/>
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};

export default LoginForm
