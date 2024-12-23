import React, {useState} from 'react';
import styles from './styles/App.module.css';
import Sidebar from './components/Sidebar';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  const handleTokenize = (): void => {
    setResults(inputText.split(''));
  };

  const handleClear = (): void => {
    setInputText('');
    setResults([]);
  };

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <header className={styles.appHeader}>
            <h1 className={styles.appTitle}>ICD 斷詞系統</h1>
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

export default App;