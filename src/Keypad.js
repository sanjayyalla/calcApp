// import React from 'react'

// function Keypad({handleClick,clearDisplay,calculate}) {
//     return (
//         <div className='keypad'>
//             <div className="row">
//                 <button onClick={
//                     ()=>{handleClick("7")
                    
//                 }
//                 } className='op'>7</button>
//                 <button onClick={
//                     ()=>{handleClick("8")}
                    
//                 }className='op'>8</button>
//                 <button onClick={
//                     ()=>{handleClick("9")}
//                 }className='op'>9</button>
//                 <button onClick={
//                     ()=>{handleClick("/")}
//                 }className='operator' >/</button>
//             </div>
//             <div className="row">
//                 <button onClick={
//                     ()=>{handleClick("4")}
//                 }className='op'>4</button>
//                 <button onClick={
//                     ()=>{handleClick("5")}
//                 }className='op'>5</button>
//                 <button onClick={
//                     ()=>{handleClick("6")}
//                 }className='op'>6</button>
//                 <button onClick={
//                     ()=>{handleClick("*")}
//                 }className='operator'>×</button>
//             </div>
//             <div className="row">
//                 <button onClick={
//                     ()=>{handleClick("1")}
//                 }className='op'>1</button>
//                 <button onClick={
//                     ()=>{handleClick("2")}
//                 }className='op'>2</button>
//                 <button onClick={
//                     ()=>{handleClick("3")}
//                 }className='op'>3</button>
//                 <button onClick={
//                     ()=>{handleClick("-")}
//                 }className='operator'>-</button>
//             </div>
//             <div className="row an">
//                 <button onClick={
//                     ()=>{handleClick("0")}
//                 }className='op new'>0</button>
//                 <button className='fk' onClick={
//                     ()=>{
//                         calculate();
//                     }
//                 }>=</button>
//                 <button className='fk' onClick={
//                     ()=>{
//                         clearDisplay();
//                     }
//                 }>C</button>
//                 <button onClick={
//                     ()=>{handleClick("+")}
//                 } className='operator new2'>+</button>
//             </div>
//         </div>
//     )
// }

// export default Keypad;
import React from 'react';
import { useEffect } from 'react';
function Keypad({handleClick, clearDisplay, calculate, backspace}) {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Backspace') {
                backspace();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [backspace]);
    return (
        <div className='keypad'>
            <div className="row">
                <button onClick={() => handleClick("7")} className='op'>7</button>
                <button onClick={() => handleClick("8")} className='op'>8</button>
                <button onClick={() => handleClick("9")} className='op'>9</button>
                <button onClick={() => handleClick("/")} className='operator'>/</button>
            </div>
            <div className="row">
                <button onClick={() => handleClick("4")} className='op'>4</button>
                <button onClick={() => handleClick("5")} className='op'>5</button>
                <button onClick={() => handleClick("6")} className='op'>6</button>
                <button onClick={() => handleClick("*")} className='operator'>×</button>
            </div>
            <div className="row">
                <button onClick={() => handleClick("1")} className='op'>1</button>
                <button onClick={() => handleClick("2")} className='op'>2</button>
                <button onClick={() => handleClick("3")} className='op'>3</button>
                <button onClick={() => handleClick("-")} className='operator'>-</button>
            </div>
            <div className="row an">
                <button onClick={() => handleClick("0")} className='op '>0</button>
                <button onClick={() => handleClick("(")} className='op '>(</button>
                <button onClick={() => handleClick(")")} className='op '>)</button>
                
                <button onClick={() => handleClick("+")} className='operator'>+</button>
            </div>
            <div className="row">
            <button onClick={() => handleClick(".")} className='op new'>.</button>              
                <button className='fk' onClick={clearDisplay}>AC</button>
                <button onClick={backspace}  className='op fk'>C</button>
                <button className='fk new2' onClick={calculate} >=</button>
            </div>
        </div>
    );
}

export default Keypad;
