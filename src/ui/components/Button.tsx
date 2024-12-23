import React from 'react';
import styles from '../styles/Button.module.css';
import { ButtonProps } from '../types/index';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;