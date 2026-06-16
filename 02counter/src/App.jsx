import { useState } from 'react'
function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  function addValue(){
    counter = counter +1;
    setCounter(counter)
    console.log("Value added", counter);
  }
  function removeValue(){
    counter = counter -1;
    if(counter>=0){
    setCounter(counter)
    console.log("Value removed", counter);  
    }else{
      alert("Counter value is 0")
    }
                
  }

  return (
   <>                    
   
   <h1> React Counter </h1>
   <h2> Counter value:{counter}</h2>
   <button style={{padding: '10px 20px', alignSelf: 'center'}} onClick={addValue}> Add value  </button>
   <br></br>
   <button style={{padding: '10px 20px', alignSelf: 'center'}} onClick={removeValue}> Remove value  </button>
   </>
  )
}

export default App
