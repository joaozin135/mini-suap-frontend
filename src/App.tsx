import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard'
import { Called } from './pages/called/index.tsx'
import { Report } from './pages/report/index.tsx';

function App() {          

  return (
    <div className="app-layout">
      
      <main className="content-area">
        <Routes>

          <Route path="/" element={<Dashboard />} />
          
          <Route path="/chamados" element={<Called />} />

          <Route path="relatorios" element={<Report />} />

        </Routes>
      </main>
      
    </div>
  )
}

export default App;
