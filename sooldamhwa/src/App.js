import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from "./Pages/Index/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
