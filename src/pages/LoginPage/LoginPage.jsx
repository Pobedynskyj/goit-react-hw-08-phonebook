import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import s from '../LoginPage/loginPage.module.scss';
import { useDispatch } from 'react-redux';
import { login } from 'components/redux/AuthUser/userOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        return;
      case 'password':
        setPassword(event.target.value);
        return;
      default:
        console.log('error');
    }
  };

  const handleSabmit = async event => {
    event.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
    try {
      await dispatch(login(credentials)).unwrap();
    } catch {
      console.log('error');
    }
  };
  return (
    <section className={s.section}>
      <h2 className={s.registerTitle}>Login, please!</h2>
      <Form className={s.form} onSubmit={handleSabmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </section>
  );
};

export default LoginPage;
