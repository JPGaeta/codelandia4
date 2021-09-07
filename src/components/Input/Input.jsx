import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  const { label, name, ...nprops } = props;
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} id={name} name={name} {...nprops} />
    </div>
  );
};

export default Input;
