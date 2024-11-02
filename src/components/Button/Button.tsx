import React from 'react';
import classNames from 'classnames';
import Loader from '../Loader';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({loading, children, disabled, className, ...props}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={classNames(
        className,
        loading && styles.loading,
        disabled && styles.disabled,
        styles.button
      )}
    >
      {loading && <Loader size={'s'} className={styles.button__loader}/>} {}
      {children}
    </button>
  );
};

export default Button;
