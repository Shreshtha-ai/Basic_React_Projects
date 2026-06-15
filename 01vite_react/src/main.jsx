import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>Hello World</h1>
  )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target = '_blank'>Visit Google</a>


)
const anotherUser = 'Shreshtha Agarwal'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Visit Google',
  anotherUser // cant write if else or any other statement, only evaluated expression is allowed beacuse it is evaluated expression 
)
createRoot(document.getElementById('root')).render(
  
    
   reactElement // we didnt use <></> tags here, we just directly called the variable

  
)