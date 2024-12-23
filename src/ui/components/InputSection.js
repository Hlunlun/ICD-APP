import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from '../styles/InputSection.module.css';
import Button from './Button';
import SearchBar from './SearchBar';
const InputSection = ({ inputText, setInputText, onTokenize, onClear }) => {
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.header, children: [_jsx("h2", { className: styles.title, children: "Input sentence to be segmented below" }), _jsx(SearchBar, {})] }), _jsxs("div", { className: styles.inputBox, children: [_jsx("textarea", { value: inputText, onChange: handleInputChange, className: styles.textarea, placeholder: "Enter Chinese text here..." }), _jsxs("div", { className: styles.buttonGroup, children: [_jsx(Button, { onClick: onTokenize, children: "\u65B7\u8A5E" }), _jsx(Button, { onClick: onClear, variant: "secondary", children: "\u6E05\u9664" })] })] })] }));
};
export default InputSection;
