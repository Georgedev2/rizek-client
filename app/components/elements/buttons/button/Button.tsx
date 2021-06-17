import React from 'react';
import styles from './button.module.scss';

interface ButtonInterface {
  label: string;
  className?:string
}
function Button({ label, className }: ButtonInterface) {
  return <button className={ `${className} ${styles.btn}`}>{label}</button>;
}

export default Button;
