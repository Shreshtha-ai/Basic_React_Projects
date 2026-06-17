import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useREF hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword]) // use for optimization of the code useCallback memorize the code in cache 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password)

  }, [password])
    
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


return (
    <>
      <h1 className='text-4xl text-center text-white my-6 font-bold tracking-tight drop-shadow-lg
 '>Password Generator </h1>

      <div className='w-full max-w-2xl mx-auto shadow-2xl rounded-2xl px-6 py-6 my-8 text-orange-400 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50
'>
        <div className='flex shadow-lg rounded-xl overflow-hidden mb-4 ring-1 ring-gray-600/50
'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-2.5 px-4 text-lg bg-white/95 text-gray-800 placeholder:text-gray-400 font-mono tracking-wide
          ' 
          readOnly 
          ref={passwordRef}
          placeholder = "Generated Password will appear here"
          />
          <button
          className='outline-none bg-blue-600 text-white px-5 py-2.5 text-lg font-semibold hover:bg-blue-700 transition-all duration-200 active:scale-95
          '
          onClick={copyPasswordToClipboard}
          
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-6 pt-2 items-center justify-between'>
          <div className='flex items-center gap-x-2'>
            <input
            type = "range"
            min = {6}
            max = {50}
            value = {length}
            className='cursor-pointer accent-orange-500 w-28'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label className='text-orange-300 font-medium select-none'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
            type = "checkbox"
            defaultChecked = {numberAllowed}
            className='cursor-pointer accent-orange-500 w-4 h-4 text-orange-500'
            onChange={() => {setnumberAllowed((prev) => (!prev));}}/>
            <label className='text-orange-300 font-medium select-none'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
            type = "checkbox"
            defaultChecked = {charAllowed}
            className='cursor-pointer accent-orange-500 w-4 h-4'
            onChange={(e) => {setCharAllowed((prev)=> (!prev))}}/>
            <label className='text-orange-300 font-medium select-none'>Special Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
