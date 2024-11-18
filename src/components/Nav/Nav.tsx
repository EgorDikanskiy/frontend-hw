import React from 'react';
import styles from './Nav.module.scss'
import classNames from 'classnames';

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li className={classNames(styles.navigation__item, styles.active)}>
                    Products
                </li>
                <li className={styles.navigation__item}>
                    Categories
                </li>
                <li className={styles.navigation__item}>
                    About us
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;