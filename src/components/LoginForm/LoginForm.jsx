import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Span, Button } from './LoginForm.styled';

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
        Email<Span>*</Span>
        <Input type="email" name="email" required/>
      </Label>
      <Label>
        Password<Span>*</Span>
        <Input type="password" name="password" required/>
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm
