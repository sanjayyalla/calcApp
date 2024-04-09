// import React, { useState } from 'react'
// import Keypad from './Keypad'
// import './App.css'

// function App() {
//   let [input, setInput] = useState("")
//   function calculate(value){
//     let output=eval(input);
//     setInput(output)
//   }
//   function handleClick(value) {
//     setInput(input + value)
//   }
//   function  clearDisplay(){
//     setInput("");
//   } 
//   return (
//     <div>
//       <div className="container">
//         {/* <h1>Calculator using React</h1> */}
//         <input type="text" value={input} className='inputfield' />
//         <Keypad handleClick={handleClick} clearDisplay={clearDisplay} calculate={calculate}/>
//       </div>
//     </div>
//   )
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Keypad from './Keypad';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if (/\d/.test(key) || ['+', '-', '*', '/', '.', '(', ')','.'].includes(key)) {
        handleClick(key);
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Escape') {
        clearDisplay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  function calculate() {
    if (input.trim() !== '') {
      try {
        const output = eval(input);
        setInput(output.toString());
      } catch (error) {
        setInput('Error');
      }
    }
  }

  function handleClick(value) {
    setInput((prevInput) => {
      
      if (/\d|\+|-|\*|\/|\./.test(value)) {
      
      
        if (prevInput.length > 0 && prevInput[prevInput.length - 1] === ')' && /\d|\(/.test(value)) {
          return prevInput + '*' + value;
        }
        return prevInput + value;
      }
      
      if (value === '(') {
      
        if (prevInput.length > 0 && /\d/.test(prevInput[prevInput.length - 1])) {
          return prevInput + '*' + value;
        }
        return prevInput + value;
      }
      
      if (value === ')') {
        return prevInput + value;
      }
      return prevInput;
    });
  }
  

  function clearDisplay() {
    setInput('');
  }

  return (
    <div>
      <div className="container">
        <input type="text" value={input} className="inputfield" readOnly />
        <Keypad handleClick={handleClick} clearDisplay={clearDisplay} calculate={calculate} backspace={backspace} />
      </div>
    </div>
  );
}

export default App;

