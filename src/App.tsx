import React, { useEffect, useState } from 'react';
import './App.css';
import { Main } from './components/atomic/pages/Main';
import { Login } from './components/atomic/pages/Login';
import { Join } from './components/atomic/pages/Join'
import { MyPage } from './components/atomic/pages/MyPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
