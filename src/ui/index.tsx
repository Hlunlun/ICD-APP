import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx'
import DatabasePage from './pages/DatabasePage/DatabasePage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import TrainingPage from './pages/TrainingPage/TrainingPage.tsx';
import HelpPage from './pages/HelpPage/HelpPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <div className='appContainer'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/database" element={<DatabasePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div> 
    </HashRouter>
  </StrictMode>
)
