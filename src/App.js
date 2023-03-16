import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// 
import React, { useState } from "react";

function CharacterLimit() {
  const [text, setText] = useState("");
  
  function handleChange(event) {
    const newText = event.target.value;
    if (newText.length <= 100) {
      setText(newText);
      if (newText.length === 100) {
        alert(" CONGRATULATIONs!!!!!!You have reached the character limit of 100!");
      }
    }
  }
  
  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <p>{text.length} / 100 characters</p>
    </div>
  );
}

export default CharacterLimit;

