import React from "react";
import Header from './modules/Header';
import "./App.css";

function App() {
  const arrHeader = [1,2,3,4,5,6,7];
  return (
    <div className="app">
      {
        arrHeader.map(el => <Header/>)
      }
    </div>
  );
}

export default App;
