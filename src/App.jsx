import './App.css'
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {
  const [value, setValue] = useState('0')

  const handleTotal = () => {
    try {
      const total = evaluate(value)
      setValue(total)
    } catch(err) {
      setValue("Error!")
      console.log(err)
    }
  }
  
  const handleClick = (e) => {
    const val = e.target.value
    if (val === "=") {
      handleTotal()
      return
    } 

    setValue((value === '0' || value === 'Error!') ? val : value + val)
  }

  const clear = () => {
    setValue('0')
  }


  return (
    <div className="calculator">
    <div className="display" id="display">
      {value}
    </div>
    <div className="buttons">
      <button onClick={clear} className="btn gray">AC</button>
      <button className="btn gray">+/-</button>
      <button onClick={handleClick} value='%' className="btn gray">%</button>
      <button onClick={handleClick} value='/' className="btn orange">÷</button>

      <button onClick={handleClick} value='7' className="btn">7</button>
      <button onClick={handleClick} value='8' className="btn">8</button>
      <button onClick={handleClick} value='9' className="btn">9</button>
      <button onClick={handleClick} value='*' className="btn orange">×</button>

      <button onClick={handleClick} value='4' className="btn">4</button>
      <button onClick={handleClick} value='5' className="btn">5</button>
      <button onClick={handleClick} value='6' className="btn">6</button>
      <button onClick={handleClick} value='-' className="btn orange">−</button>

      <button onClick={handleClick} value='1' className="btn">1</button>
      <button onClick={handleClick} value='2' className="btn">2</button>
      <button onClick={handleClick} value='3' className="btn">3</button>
      <button onClick={handleClick} value='+' className="btn orange">+</button>

      <button onClick={handleClick} value='0' className="btn wide">0</button>
      <button onClick={handleClick} value='.' className="btn">.</button>
      <button onClick={handleClick} value='=' className="btn orange">=</button>
    </div>
  </div>
  )
}

export default App
