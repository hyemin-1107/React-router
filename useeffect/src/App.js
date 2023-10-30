import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = useState();
  const [page, setPage] = useState(0);

  const onClick = () => {
    setPage(page + 1);
  };

  const getDataFunction = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${page + 1}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getDataFunction();
  }, [page]);

  return (
    <div className="App">
      <button onClick={() => onClick()}>버튼 {page}</button>
      {/* 조건부 렌더링 논리연산자 */}
      {data && <div>{data.title}</div>}
    </div>
  );
}

export default App;
