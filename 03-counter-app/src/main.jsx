import React from "react";
import ReactDOM from 'react-dom/client'
import { FirstApp } from "./FirstApp";


function App () {
    return (<h1> Hola mundi</h1>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp num={123} title="soy un titulo" />
        <App></App>
    </React.StrictMode>
)