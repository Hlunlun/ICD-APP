import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    return (_jsxs("div", { className: styles.searchContainer, children: [_jsx("input", { type: "text", value: searchQuery, onChange: handleSearch, placeholder: "Search", className: styles.searchInput }), _jsx("svg", { className: styles.searchIcon, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) })] }));
};
export default SearchBar;
