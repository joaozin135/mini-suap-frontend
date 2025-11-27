import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Called } from "./pages/called/index.tsx";
import { Report } from "./pages/report/index.tsx";
import { Login } from "./pages/login/index.tsx";
import { NewCalled } from "./pages/NewCalled/index.tsx";

function App() {
  return (
    <div className="app-layout">
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/chamados" element={<Called />} />

          <Route path="/novochamado" element={<NewCalled />} />

          <Route path="/relatorios" element={<Report />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
