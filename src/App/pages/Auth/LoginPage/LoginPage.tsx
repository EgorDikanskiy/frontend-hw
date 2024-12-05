import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'components/Button';
import Input from 'components/Input';
import { routerUrls } from 'config/routerUrls';
import { useRootStore } from 'stores/RootStore';
import styles from './Login.module.scss';

const Login: React.FC = observer(() => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { authStore } = useRootStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authStore.login(email, password);
      alert('Вы успешно зашли в свой аккаунт!');
      navigate(routerUrls.profile.mask);
    } catch (_error) {
      alert('Ошибка авторизации, проверьте введённые данные.');
      navigate(routerUrls.login.mask);
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
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className={styles.login__button_container}>
          <Button className={styles.login__button} type="submit" disabled={authStore.loading}>
            {authStore.loading ? 'Загрузка...' : 'Войти'}
          </Button>
          <Link to={routerUrls.register.mask}>
            <p className={styles.login__register}>Зарегистрироваться</p>
          </Link>
        </div>
      </form>
    </div>
  );
});

export default Login;
