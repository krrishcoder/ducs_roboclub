import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import AppLayout from './components/layout/AppLayout'
import Arena from './pages/Arena'
import Intel from './pages/Intel'
import Logs from './pages/Logs'
import Join from './pages/Join'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Arena />} />
          <Route path="intel" element={<Intel />} />
          <Route path="logs" element={<Logs />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
