import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState(null)
  //const [toggle, setToggle] = useState(false);  //const toggle = false. Önmagában nem módosítható, hanem csak a setter segítségével, egy külön függvénnyel. 

 /*  if (toggle === false) {
    setToggle(toggle => ! toggle)
  } else {
    setToggle(toggle => !toggle)
  } 
  
  ez is infinite loop.*/
  
  //setToggle(toggle => !toggle) ez egy kapcsoló. Ezzel azt mondjuk, hogy legyen az ellentéte az eredetinek. De ez infinite loopra fut.
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
//      console.log(data)
        setTimeout(() => setCountries(data), 1000)
      })
/* console.log("run")
setToggle(toggle => true) */
  }, [])
  
  return (
    <div className="App">
      {countries ? <Countries countries={countries} /> : <p>loading...</p>}


      {/* {
        countries.length === 0;
      } */}
      
      {/* {toggle ? <p>The toggle is on.</p> : <p>The toggle is off.</p>} */}

      {/* A react-nek turnery kell, de ez eredetileg ez lenne:
      if (toggle) {
        return  <p>The toggle is on.</p>
      } else {
        return <p>The toggle is off.</p>
      } */}

    
    </div>
  );
}

export default App;