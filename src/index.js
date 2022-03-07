import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    // using setTimeout for some "dramatic" delay effect ;)
    if (selectedColor !== null) {
      const scrollIntoViewOptions = {
        inline: "center",
        block: "center",
        behavior: "smooth"
      };

      document
        .getElementById(selectedColor)
        .scrollIntoView(scrollIntoViewOptions);
    }
  }, [selectedColor]);

  const handleSetColorBtnClick = (e) => {
    setSelectedColor(e.currentTarget.innerText);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleSetColorBtnClick}>blue</button>
        <button onClick={handleSetColorBtnClick}>red</button>
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
