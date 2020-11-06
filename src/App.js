import React from "react";
import ColorBox from "./component/colorBox";

import './App.css';

function App() {
  return (
    <div className="App">
      <ColorBox color="black"></ColorBox>
      <ColorBox color="blue"></ColorBox>
      <ColorBox color="green"></ColorBox>
    </div>
  );
}

export default App;
