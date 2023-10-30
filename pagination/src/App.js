import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';
import Pagination from './Pages/Pagination/Pagination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
