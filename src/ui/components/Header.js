import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from '../styles/Header.module.css';
const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };
    return (_jsxs("header", { className: styles.header, children: [_jsxs("div", { className: styles.headerLeft, children: [_jsx("span", { className: styles.appIcon }), _jsx("p", { className: styles.appName, children: "ICD \u65B7\u8A5E\u7CFB\u7D71" }), _jsx("div", { className: styles.searchWrapper, children: _jsx("input", { className: styles.searchInput, type: "text", placeholder: "\u641C\u5C0B" }) })] }), _jsx("div", { className: styles.headerRight, children: _jsx("button", { title: "Switch Theme", className: `${styles.modeSwitch} ${isDarkMode ? styles.active : ''}`, onClick: toggleDarkMode, children: "\uD83C\uDF19" }) })] }));
};
export default Header;
