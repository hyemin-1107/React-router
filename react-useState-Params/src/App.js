// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Login from './login/Login';
import LoginCheck from './login/LoginCheck';
import Join from './Join';
<script src="http://localhost:8097"></script>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loginCheck" element={<LoginCheck/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;
