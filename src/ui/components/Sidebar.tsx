
import styles from '../styles/Sidebar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Database, TrendingUp, HelpCircle } from 'lucide-react';
import { NavItem } from '../types/index';

const navItems: NavItem[] = [
  {
    path: '/',
    icon: <Home size={24} />,
    title: '首頁'
  },
  {
    path: '/database',
    icon: <Database size={24} />,
    title: '資料庫'
  },
  {
    path: '/training',
    icon: <TrendingUp size={24} />,
    title: '訓練模型'
  },
  {
    path: '/help',
    icon: <HelpCircle size={24} />,
    title: '說明'
  },
];



const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} title={item.title}
            className={({ isActive }) => 
                `${styles.sidebarIcon} ${isActive ? styles.active : ''}`}
            >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;