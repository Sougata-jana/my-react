import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <div>
            <h1>hiiii how are you | sougata jana</h1>
        </div>
    )
}
const anotherElement = (
    <a href="https://google.com" target="_blank">vist google</a>

)
const anotheruser = "react is my febarate"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'blank'},
    'click to vist google',
    anotheruser // evalutate element 
)
createRoot(document.getElementById('root')).render(

   <App />,

  
)
