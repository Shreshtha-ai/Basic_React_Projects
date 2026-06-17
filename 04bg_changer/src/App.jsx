import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive") 

  return (
    <>
    <div className='w-full h-screen duration-200 bg-olive' 
    style = {{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl'> 
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"red"}} onClick= {() => setColor("red")} >RED</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"green"}} onClick={()=>setColor("green")} >GREEN</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"blue"}} onClick={()=>setColor("blue")} >BLUE</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"orange"}} onClick={()=>setColor("orange")} >ORANGE</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")} >YELLOW</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"pink"}} onClick={()=>setColor("pink")} >PINK</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"purple"}} onClick={()=>setColor("purple")} >PURPLE</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style = {{backgroundColor:"gray"}} onClick = {() => setColor("grey")}>GRAY</button>
          
        </div>


      </div>
    </div>

    </>
  )
}

export default App
