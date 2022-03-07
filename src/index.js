import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {

  const handleClick = (color) => {
    document
      .getElementById(color)
      .scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "smooth"
    });
  }
  
  return (
    <div className="App">
      <div>
        <button onClick={(e) => handleClick('blue')}>blue</button>
        <button onClick={(e) => handleClick('red')}>red</button>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div id="red">
        <p style={{ color: "red", fontSize: 48 }}>Look at me!</p>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div id="blue">
        <p style={{ color: "blue", fontSize: 48 }}>Look at me!</p>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
      <div>
        <h1>Here's a bunch of stuff nobody cares about</h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
