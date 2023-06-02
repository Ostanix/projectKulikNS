import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = () => {
  return (
    <ul className={styles.navBlock}>
      <li className={styles.navItem}>
        <Link className={styles.navLink} aria-current='page' to='/'>
          Главная
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
