import { StrictMode } from 'react'
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

createRoot(document.getElementById('root')).render(
  
    
    <MyApp/>

  
)