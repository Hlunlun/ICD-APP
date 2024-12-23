import { jsx as _jsx } from "react/jsx-runtime";
import styles from '../styles/Button.module.css';
const Button = ({ children, variant = 'primary', onClick, disabled = false, type = 'button' }) => {
    return (_jsx("button", { type: type, onClick: onClick, disabled: disabled, className: `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`, children: children }));
};
export default Button;
