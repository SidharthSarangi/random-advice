import React,{useState,useEffect} from "react" ;
import './App.css';

function App() {
  const [first, setFirst] = useState([]); 
  const [another,setAnother] = useState(0) ;
  const getAdvice = async ()=>{
      const res = await fetch('https://api.adviceslip.com/advice') ;
      const parsed = await res.json() ;
      setFirst(parsed.slip); 
  }
  useEffect(()=>{
    getAdvice() ;
  },[another]) ;

  const handleOnClick=()=>{
     setAnother(another+1) ;
  }

  return (
    <div className="App">
        <h1 className="advice-box">{first.advice}</h1>
        <button className="btn" onClick={handleOnClick}>New Advice</button>
    </div>
  );
}

export default App;
