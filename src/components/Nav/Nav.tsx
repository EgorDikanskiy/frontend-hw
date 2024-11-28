import classNames from 'classnames';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { routerUrls } from 'config/routerUrls';
import styles from './Nav.module.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li
          className={classNames(styles.navigation__item, {
            [styles.active]: useMatch(routerUrls.catalog.mask),
          })}
        >
          <Link to={routerUrls.catalog.mask}>Products</Link>
        </li>
        <li
          className={classNames(styles.navigation__item, {
            [styles.active]: useMatch(routerUrls.categories.mask),
          })}
        >
          <Link to={routerUrls.categories.mask}>Categories</Link>
        </li>
        <li
          className={classNames(styles.navigation__item, {
            [styles.active]: useMatch(routerUrls.about_us.mask),
          })}
        >
          <Link to={routerUrls.about_us.mask}>About us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
