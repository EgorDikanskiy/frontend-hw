import React, { useState } from 'react';
import Navigation from 'components/Nav';
import Panel from 'components/Panel';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.panel}>
          <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
          </button>
        </div>
        <div className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ''}`}>
          <div className={styles.header__inner}>
            <a href="/catalog">
              <img src={logo} alt="Logo" />
            </a>
            <Navigation />
            <Panel />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
