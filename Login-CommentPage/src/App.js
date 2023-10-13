// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/main" element={<Main />}/>
        </Routes>
    </div>
  );
};

export default App;
