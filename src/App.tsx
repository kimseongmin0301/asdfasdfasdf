import './App.css';
import { Main } from './components/atomic/pages/Main';
import { Login } from './components/atomic/pages/Login';
import { Join } from './components/atomic/pages/Join'
import { MyPage } from './components/atomic/pages/MyPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const isLoggedIn = localStorage.getItem("login") === 'true';
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={isLoggedIn ? <Main /> : <Join />} />
          <Route path="/mypage/:id" element={isLoggedIn ? <MyPage /> : <Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
