import Button from './Button';
import styles from './button.module.scss';


export default {
  title: 'BUTTON',
  component: Button,
};

export const Default = () => <Button label='Default'></Button>;
export const addBorderRadius = () => <Button className={styles.borderRadius} label='Added Border Radius' ></Button>;
export const addBackground = () => <Button className={styles.bg} label='Added Background'></Button>;
