// SearchBar.js
import React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css'; // Create a CSS module for SearchBar styling

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <InputBase
        placeholder="Search..."
        className={styles.searchInput}
        endAdornment={<SearchIcon className={styles.searchIcon} />}
      />
    </div>
  );
};

export default SearchBar;
