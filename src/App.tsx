import './App.css';
import { Main } from './components/atomic/pages/Main';
import { Login } from './components/atomic/pages/Login';
import { Join } from './components/atomic/pages/Join'
import { MyPage } from './components/atomic/pages/MyPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Error } from './components/atomic/pages/Error';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/**" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
