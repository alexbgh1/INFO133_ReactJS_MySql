import { useState } from 'react';
import './App.css';
import Axios from 'axios'


function App() {

  //const [colors, setColors] = useState();


  // INFO DOT
  const [name, setName] = useState('Custom');
  const [size, setSize] = useState(25);
  const [color, setColor] = useState('#000000');

  // INSERT DOT 
  const addDot = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      size: size,
      color: color
    }).then(() =>{
      console.log('sucess')
    });
  };


  // CONSTRUCTOR DOT
  const Dot = ({color,size}) =>{
    if (size > 100) setSize(100);
    const style = {
      height: `${size}px`,
      width: `${size}px`,
      margin: "0px auto",
      backgroundColor: color,
      borderRadius: "50%",
      display: 'table'
    }
    return <span style={style}></span>
  }

  return (
    <>
    <div>
      <h1>Dot Generator</h1>
      <div className="param-container">
        <div className="param">
          <label style={{textAlign:'center'}}>Name</label>
          <input placeholder="Custom" type="text" onChange={(e) => {setName(e.target.value);}} />
        </div>

        <div className="param">
          <label style={{textAlign:'center'}}>Size</label>
          <input placeholder="25 (max: 100)" type="number" min = {1} max = {100} onChange={(e) => {setSize(e.target.value);}} />
        </div>

        <div className="param">
          <label style={{textAlign:'center'}}>Color</label>
          <input placeholder="#000000" type="text" onChange={(e) => {setColor(e.target.value);}} />
        </div>
      </div>
      <div style={{display:'block'}}></div>
      <div className="button-container">
        <button onClick={addDot} className='button-generate-dot'>New Dot</button>
      </div>

      <div className='points-container'>
        <div>
          <div className='points'>
            <p style={{textAlign:'center',fontSize:`${size*0.5}px`, margin: '5px'}}>{name}</p>
            <Dot color = {color} size = {size}/>
          </div>
        </div>
      </div>

      {/* SHOW DATABASE */}
      <button>Show Dots</button>
    </div>
  </>
  );
}

export default App;
