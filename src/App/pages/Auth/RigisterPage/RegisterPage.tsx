import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Input from 'components/Input';
import { useAuthStore } from '../context/AuthContext';
import styles from './Register.module.scss';

const RegisterForm = observer(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authStore.register(name, email, password, avatar);
      alert('Registration successful! You are now logged in.');
      navigate('/profile');
    } catch (err) {
      console.error('Registration failed:', err);
      navigate('/register');
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleAvatarChange = (value: string) => {
    setAvatar(value);
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit} className={styles.register__form}>
        <div>
          <label>
            Name:
            <Input className={styles.register__input} type="text" value={name} onChange={handleNameChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <Input
              className={styles.register__input}
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <Input
              className={styles.register__input}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Avatar URL:
            <Input className={styles.register__input} type="url" value={avatar} onChange={handleAvatarChange} />
          </label>
        </div>
        <div className={styles.register__button_container}>
          <Button className={styles.register__button} type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
});

export default RegisterForm;
