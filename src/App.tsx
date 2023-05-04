import React, { useEffect, useState } from 'react';
import './App.css';
import { Main } from './components/atomic/pages/Main';
import { Login } from './components/atomic/pages/Login';
import { Join } from './components/atomic/pages/Join'
import { MyPage } from './components/atomic/pages/MyPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const rootID = {
      id: 'root',
      pw: 1234,
    }
    localStorage.setItem('user', JSON.stringify(rootID));

    // const loginStatus = localStorage.getItem('login') === "true" ? true : false;  
    // setIsLoggedIn(loginStatus);
  })

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
