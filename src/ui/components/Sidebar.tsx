import React from 'react';
import { Home, Database, TrendingUp, HelpCircle } from 'lucide-react';
import styles from '../styles/Sidebar.module.css';
import { SidebarIconProps } from '../types/index';

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`${styles.sidebarIcon} ${active ? styles.active : ''}`}
    >
      {icon}
    </button>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <SidebarIcon icon={<Home size={24} />} active />
        <SidebarIcon icon={<Database size={24} />} />
        <SidebarIcon icon={<TrendingUp size={24} />} />
        <SidebarIcon icon={<HelpCircle size={24} />} />
      </div>
    </div>
  );
};

export default Sidebar;