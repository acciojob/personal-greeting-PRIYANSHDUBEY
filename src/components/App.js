import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <p>Enter your name:</p>
      <form action="">
        <input type="text" value={text} onChange={handleInput} />
      </form>
      
      {text && <p>Hello {text}</p>}
    </div>
  );
}

export default App;
