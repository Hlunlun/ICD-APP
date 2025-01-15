import React from 'react';
import styles from '../styles/ResultsSection.module.css';
import { ResultsSectionProps} from '../types/index';



const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>斷詞結果</h2>
      <div className={styles.resultsBox}>
        <div className={styles.tokenContainer}>{results}</div>
      </div>
    </div>
  );
};

export default ResultsSection;