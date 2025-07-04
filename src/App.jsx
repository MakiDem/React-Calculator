import './App.css'

function App() {
  return (
    <div className="calculator">
    <div className="display" id="display">0</div>
    <div className="buttons">
      <button className="btn gray">AC</button>
      <button className="btn gray">+/-</button>
      <button className="btn gray">%</button>
      <button className="btn orange">÷</button>

      <button className="btn">7</button>
      <button className="btn">8</button>
      <button className="btn">9</button>
      <button className="btn orange">×</button>

      <button className="btn">4</button>
      <button className="btn">5</button>
      <button className="btn">6</button>
      <button className="btn orange">−</button>

      <button className="btn">1</button>
      <button className="btn">2</button>
      <button className="btn">3</button>
      <button className="btn orange">+</button>

      <button className="btn wide">0</button>
      <button className="btn">.</button>
      <button className="btn orange">=</button>
    </div>
  </div>
  )
}

export default App
