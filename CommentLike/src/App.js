import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommentLike from './CommentLike/CommentLike';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommentLike />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
