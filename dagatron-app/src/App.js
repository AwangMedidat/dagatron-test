// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/home';
import { 
  Route,
  Routes
 } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
