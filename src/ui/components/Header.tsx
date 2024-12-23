import React, {useState} from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {


  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };



  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <span className={styles.appIcon}></span>
        <p className={styles.appName}>ICD 斷詞系統</p>
        <div className={styles.searchWrapper}>
          <input className={styles.searchInput} type="text" placeholder="搜尋" />
        </div>
      </div>
      <div className={styles.headerRight}>
        <button title="Switch Theme" className={`${styles.modeSwitch} ${isDarkMode ? styles.active : ''}`} onClick={toggleDarkMode}>🌙</button>
      </div>
    </header>
  );
};

export default Header;
