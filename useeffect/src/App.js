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

    console.log(`page = ${page + 1} fetch 실행됬음`)
  };

  useEffect(() => {

    getDataFunction();
  }, [page]);

  return (
    <div className="App">
      <button onClick={() => onClick()}>버튼 {page}</button>
      {data && <div>{data.title}</div>}
    </div>
  );
}

export default App;
