import React from 'react';
import styles from './OwlTemplate.module.css';

const OwlTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default OwlTemplate;
