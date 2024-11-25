import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { useAuthStore } from '../context/AuthContext';
import styles from './Profile.module.scss';

const Profile: React.FC = observer(() => {
  const authStore = useAuthStore();
  const { user, logout } = authStore;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/catalog');
  };

  if (!user) return <Loader />;

  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <h1 className={styles.profile__title}>Welcome, {user.name}</h1>
      </div>
      <img src={user.avatar} alt="Avatar" className={styles.profile__avatar} />
      <p className={styles.profile__info}>Email: {user.email}</p>
      <Button className={styles.profile__logout_button} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
});

export default Profile;
