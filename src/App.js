import React from "react";
import "./App.css";
import TimeTravel from './components/TimeTravel'
import { StyledTimeTravel } from "./components/Styled";

function App() {

  function randomDate() {
    const randomYear = String(Math.floor(Math.random() * (1999 - 2020 + 1) + 2020))
    const randomMonth = String(Math.floor(Math.random() * (0 - 12 + 1) + 12))
    const randomDay = String(Math.floor(Math.random() * (0 - 29 + 1) + 29))
    return `${randomYear}-${randomMonth}-${randomDay}`

}
  return (
    <StyledTimeTravel>
      <div className="App">
        <TimeTravel randomDate={randomDate}/>
      </div>
    </StyledTimeTravel>
  );
}

export default App;
