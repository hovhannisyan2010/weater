import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const input = document.querySelector(".inp")
  const [weater,setWeater] = useState({})
  const [inp,setInp] = useState("")
  function weaterSubmit(event) {
      event.preventDefault()
      setInp(event.target.input.value)    
    }
  useEffect(()=>{
      fetch(`https://api.weatherapi.com/v1/current.json?key=e857cf09ed224ed4adf82811240211&q=${inp}&aqi=no%60`)
      .then(res=>res.json())
      .then(res=>setWeater(res))
  },[inp])
  
    
  return (
    <div className="App ">
      <form onSubmit={weaterSubmit} className='form'>
      <input type='text' className='inp'  name='input'/>
      <button type='submit' className='submit'>submit</button>
      </form>
      <div>
        <h1>{weater.location?weater.location.name:null}</h1>
        <h1>{weater.current?`${weater.current.temp_c}C`:null}</h1>
        <h1>{weater.current?weater.current.condition.text:null}</h1>
        <img src={weater.current?weater.current.condition.icon:null}/>
        <img/>
      </div>
    </div>
  );
}

export default App;
