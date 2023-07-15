import React, {FC} from 'react';
import styles from './Appbar.module.css'


const Appbar: FC = () => {
  console.log(styles['app-bar-container'])
  return (
    <nav className={styles['app-bar-container']}>
      <h1 className={styles['app-bar-logo']}>
        Title
      </h1>
      <button className={styles['app-bar-theme-switch']}>
        Button
      </button>
    </nav>
  );
};

export default Appbar;
