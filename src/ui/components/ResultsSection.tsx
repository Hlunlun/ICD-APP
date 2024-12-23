import React from 'react';
import styles from '../styles/ResultsSection.module.css';
import { ResultsSectionProps, TokenProps } from '../types/index';

const Token: React.FC<TokenProps> = ({ text }) => {
  return (
    <span className={styles.token}>{text}</span>
  );
};

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Results</h2>
      <div className={styles.resultsBox}>
        <div className={styles.tokenContainer}>
          {results.map((token, index) => (
            <Token key={index} text={token} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;