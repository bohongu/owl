import React from 'react';
import styles from './OwlJoin.module.css';

const OwlJoin = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles['join-label']}>
        <input
          className={styles['join-input']}
          type="text"
          placeholder="Enter Nickname"
        />
        <button className={styles['join-button']}>START</button>
      </label>
      <div className={styles.valid}>이미 사용 중인 닉네임 입니다</div>
    </div>
  );
};

export default OwlJoin;
