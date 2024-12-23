import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from '../styles/ResultsSection.module.css';
const Token = ({ text }) => {
    return (_jsx("span", { className: styles.token, children: text }));
};
const ResultsSection = ({ results }) => {
    return (_jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.title, children: "Results" }), _jsx("div", { className: styles.resultsBox, children: _jsx("div", { className: styles.tokenContainer, children: results.map((token, index) => (_jsx(Token, { text: token }, index))) }) })] }));
};
export default ResultsSection;
