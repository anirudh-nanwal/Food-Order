import React, { FC } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../../assets/meals.jpg';

interface HeaderProps {
  className: string
}

const Header: FC<HeaderProps> = (props) => {
  const classes = props.className;
  return (
    <>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <h1>ReactMeals</h1>
          <button>Card</button>
        </div>
        <div className={styles['main-image']}><img src={mealsImage} alt="Meals" /></div>
      </header>
    </>
  );
}

export default Header;
