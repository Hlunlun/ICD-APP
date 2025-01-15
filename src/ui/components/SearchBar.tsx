import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import { Search } from 'lucide-react';



const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search"
        className={styles.searchInput}
      />
      <Search size={24} />
      
    </div>
  );
};

export default SearchBar;