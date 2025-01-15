import React, {useState} from 'react';
import styles from './HomePage.module.css';
import InputSection from '../../components/InputSection.tsx';
import ResultsSection from '../../components/ResultsSection.tsx';
import SearchBar from '../../components/SearchBar.tsx';
import Api from '../../../service/Api.ts';

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [results, setResults] = useState<string>('');

  const handleTokenize = (): void => {
    const fetchData = async (text: string): Promise<void> => {      
      try {
        const response = await Api.fetchData('/parse_text', 'POST', {text:text})
        console.log(response);
        
        const tokenizedResult = response.icd_token;
        console.log(tokenizedResult);
        
        setResults(tokenizedResult);
      } catch (error) {
        console.error("Error  fetching data:", error);
      }
    };
    fetchData(inputText);
    
  };

  const handleClear = (): void => {
    setInputText('');
    setResults('');
  };

  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <header className={styles.appHeader}>
            <h1 className={styles.appTitle}>ICD 斷詞系統</h1>
            <SearchBar />
          </header>
          
          <div className={styles.workspaceArea}>
            <InputSection
              inputText={inputText}
              setInputText={setInputText}
              onTokenize={handleTokenize}
              onClear={handleClear}
            />
            <ResultsSection results={results} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default  HomePage;