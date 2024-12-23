import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Home, Database, TrendingUp, HelpCircle } from 'lucide-react';
import styles from '../styles/Sidebar.module.css';
const SidebarIcon = ({ icon, active, onClick }) => {
    return (_jsx("button", { onClick: onClick, className: `${styles.sidebarIcon} ${active ? styles.active : ''}`, children: icon }));
};
const Sidebar = () => {
    return (_jsx("div", { className: styles.sidebar, children: _jsxs("div", { className: styles.sidebarContent, children: [_jsx(SidebarIcon, { icon: _jsx(Home, { size: 24 }), active: true }), _jsx(SidebarIcon, { icon: _jsx(Database, { size: 24 }) }), _jsx(SidebarIcon, { icon: _jsx(TrendingUp, { size: 24 }) }), _jsx(SidebarIcon, { icon: _jsx(HelpCircle, { size: 24 }) })] }) }));
};
export default Sidebar;
