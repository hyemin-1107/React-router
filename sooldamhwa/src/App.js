import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Pages/Index/Main";
import Subscribe from "./Pages/Subscribe/Subscribe"
import Login from './Pages/Login/Login';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
