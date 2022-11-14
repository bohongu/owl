import React from 'react';
import styles from './OwlChat.module.css';

const OwlChat = () => {
  return (
    <>
      <div className={styles.wrapper}></div>
      <form className={styles.form}>
        <label className={styles['chat-label']}>
          <input className={styles['chat-input']} />
          <button className={styles['chat-button']}>SEND</button>
        </label>
      </form>
    </>
  );
};

export default OwlChat;
