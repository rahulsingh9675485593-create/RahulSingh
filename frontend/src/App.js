import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleAuth = () => setAuthenticated(true);

  if (!authenticated) {
    return <Login onAuth={handleAuth} />;
  }

  return (
    <Router>
      <div className="App">
        <h1>Chinki Trading Company ERP</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
