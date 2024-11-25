import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'components/Button';
import Input from 'components/Input';
import { useAuthStore } from '../context/AuthContext';
import styles from './Login.module.scss';

const Login: React.FC = observer(() => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authStore.login(email, password);
      alert('You have successfully logged in!');
      navigate('/profile');
    } catch (error) {
      alert('Authorization error. Check the entered data.' + error);
      navigate('/login');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <Input
          className={styles.login__input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Input
          className={styles.login__input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className={styles.login__button_container}>
          <Button className={styles.login__button} type="submit" disabled={authStore.loading}>
            {authStore.loading ? 'Loading...' : 'Login'}
          </Button>
          <Link to={'/register'}>
            <p className={styles.login__register}>Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
});

export default Login;
