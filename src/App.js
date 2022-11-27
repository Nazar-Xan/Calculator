import React, { useState } from 'react'
import './App.css'
const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1)); 
    }

    const equals = () => {
        try{
            setResult(eval(result).toString());
        } catch(err)
        {
            setResult("Error");
        }
    }

return (
    <>
    <div className="App">
        <h1>React Js Calculator</h1>
    </div>
    <div className="container">
        <form>
            <input type="text" value={result} id="text"/>
        </form>
        <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">AC</button>
            <button className="highlight" onClick={backspace} id="backspace">C</button>
            <button name="1" onClick={handleClick} id="one">1</button>
            <button name="2" onClick={handleClick} id="two">2</button>
            <button name="3" onClick={handleClick} id="three">3</button>
            <button className="highlight" name="+" onClick={handleClick} id="plus">+</button>
            <button name="4" onClick={handleClick} id="four">4</button>
            <button name="5" onClick={handleClick} id="five">5</button>
            <button name="6" onClick={handleClick} id="six">6</button>
            <button className="highlight" name="-" onClick={handleClick} id="minus">-</button>
            <button name="6" onClick={handleClick} id="seven">7</button>
            <button name="8" onClick={handleClick} id="eight">8</button>
            <button name="9" onClick={handleClick} id="nine">9</button>
            <button className="highlight" name="*" onClick={handleClick}id="multiplication">*</button>
            <button name="0" onClick={handleClick} id="zero">0</button>
            <button name="." onClick={handleClick} id="dot">.</button>
            <button name="," onClick={handleClick} id="comma">,</button>
            <button className="highlight" name="/" onClick={handleClick} id="delete">/</button>
            <button className="highlight" onClick={equals} id="result">=</button>
        </div>
    </div>
    </>
  )
}
export default App;