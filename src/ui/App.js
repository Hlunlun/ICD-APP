import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './styles/App.module.css';
import Sidebar from './components/Sidebar';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';
const App = () => {
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState([]);
    const handleTokenize = () => {
        setResults(inputText.split(''));
    };
    const handleClear = () => {
        setInputText('');
        setResults([]);
    };
    return (_jsxs("div", { className: styles.appContainer, children: [_jsx(Sidebar, {}), _jsx("main", { className: styles.mainContent, children: _jsxs("div", { className: styles.contentWrapper, children: [_jsx("header", { className: styles.appHeader, children: _jsx("h1", { className: styles.appTitle, children: "ICD \u65B7\u8A5E\u7CFB\u7D71" }) }), _jsxs("div", { className: styles.workspaceArea, children: [_jsx(InputSection, { inputText: inputText, setInputText: setInputText, onTokenize: handleTokenize, onClear: handleClear }), _jsx(ResultsSection, { results: results })] })] }) })] }));
};
export default App;
