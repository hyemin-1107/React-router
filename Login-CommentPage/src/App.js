// import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
