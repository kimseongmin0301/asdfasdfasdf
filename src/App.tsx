import React from 'react';
import Button from '@mui/material/Button'
import './App.css';
import { Main } from './components/atomic/pages/Main';
import { Login } from './components/atomic/pages/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
