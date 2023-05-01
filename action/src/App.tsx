import React from "react";
import logo from "./logo.svg";
import "./App.css";

const port = process.env.REACT_APP_PORT;

function App() {
  console.log("start");
  console.log(process.env.REACT_APP_TEST);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>이게 마지막이다</p>
        <p>채팅 기능</p>
        <p>1. DB 설계</p>
        <p>2. 양방향 통신 소켓 I/O</p>
        <p>{port}</p>
      </header>
    </div>
  );
}

export default App;
