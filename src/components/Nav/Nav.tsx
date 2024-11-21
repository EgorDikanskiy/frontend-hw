import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.scss';

const Navigation = () => {
  const location = useLocation(); // Хук для получения текущего пути

  return (
    <nav>
      <ul className={styles.navigation}>
        <li
          className={classNames(styles.navigation__item, {
            [styles.active]: location.pathname === '/catalog',
          })}
        >
          <Link to="/catalog">Products</Link>
        </li>
        <li
          className={classNames(styles.navigation__item, {
            [styles.active]: location.pathname === '/categories',
          })}
        >
          <Link to="/categories">Categories</Link>
        </li>
        <li
          className={classNames(styles.navigation__item, {
            [styles.active]: location.pathname === '/about_us',
          })}
        >
          <Link to="/about_us">About us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
