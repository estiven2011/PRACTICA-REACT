import React from "react";
import ReactDOM from 'react-dom/client'
import { FirstApp } from "./firstApp";


function App () {
    return (<h1> Hola mundi</h1>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)