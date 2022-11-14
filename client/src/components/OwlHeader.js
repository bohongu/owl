import React from 'react';
import styles from './OwlHeader.module.css';
import owl from '../assets/owl.png';

const OwlHeader = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.date}>{today}</h1>
      <img className={styles['title-img']} src={owl} alt="owl" />
      <h1 className={styles.empty}>{today}</h1>
    </div>
  );
};

export default OwlHeader;
