import React from 'react';
import styles from '../styles/InputSection.module.css';
import { InputSectionProps } from '../types/index';
import Button from './Button';
import SearchBar from './SearchBar';





const InputSection: React.FC<InputSectionProps> = ({
  inputText,
  setInputText,
  onTokenize,
  onClear
}) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>輸入需要斷詞通報資料</h2>
      </div>

      <div className={styles.inputBox}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          className={styles.textarea}
          placeholder="請在此處輸入"
        />
        
        <div className={styles.buttonGroup}>
          <Button onClick={onTokenize}>斷詞</Button>
          <Button onClick={onClear} variant="secondary">清除</Button>
        </div>
      </div>
    </div>
  );
};


export default InputSection;