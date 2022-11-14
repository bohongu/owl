import React from 'react';
import styles from './OwlIntro.module.css';

const OwlIntro = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles['intro-title']}>Talk to Stranger</h1>
      <p>Hope you enjoy chatting with random strangers!</p>
      <p>
        Please note that if you impersonate someone else, you may be subject to
        separate legal sanctions.
      </p>
      <p>Enter your nickname and enjoy chatting</p>
    </div>
  );
};

export default OwlIntro;
