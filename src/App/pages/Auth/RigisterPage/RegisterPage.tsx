import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Input from 'components/Input';
import { routerUrls } from 'config/routerUrls';
import { useRootStore } from 'stores/RootStore';
import styles from './Register.module.scss';

const RegisterForm = observer(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const { authStore } = useRootStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setUploading(true);
    try {
      await authStore.registerWithAvatar(name, email, password, file); // Используем метод AuthStore
      alert('Регистрация успешна!');
      navigate(routerUrls.profile.mask);
    } catch (err) {
      setError('Ошибка. Попробуйте снова.');
    } finally {
      setUploading(false);
    }
  };

  const handleNameChange = (value: string) => setName(value);
  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);
  const handleConfirmPasswordChange = (value: string) => setConfirmPassword(value);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit} className={styles.register__form}>
        <div>
          <label>
            Имя:
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
            Пароль:
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
            Подтвердите пароль:
            <Input
              className={styles.register__input}
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </label>
        </div>
        {error && <div className={styles.register__error}>{error}</div>}
        <div>
          <label>
            Автарка:
            <input className={styles.register__file_input} type="file" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
        {uploading && <div className={styles.register__loading}>Загрузка файла...</div>}
        <div className={styles.register__button_container}>
          <Button className={styles.register__button} type="submit" disabled={uploading}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
});

export default RegisterForm;
