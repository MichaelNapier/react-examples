// HEX #000000
// RGB rgb(25,45,67)
// Possibly a gradient color need to fix and refactor

import { useState } from 'react'
import './styles.css'


export default function RandomColor(){
    const [color, setColor] = useState("#000000");
    const [colorType, setColorType] = useState("HEX");
    // const [gradientColor, setGradientColor] = useState('');

    function handleRandomHex(){
        const letters = "0123456789ABCDEF";
        // Adds # to the begining of variable 
        let hexColor = "#";
        // This for loop runs six times, and in each iteration, it generates a random index between 0 and 15.
        // It then selects the character at that index from letters
        // and appends it to the hexColor variable.
        for(let i=0; i<6; i++){
            hexColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(hexColor);
    }
    
    function handleRandomRgb(){
    // The Math.random() function returns a random floating-point number between 0 and 1,
    // which is then multiplied by 256 to get a value between 0 and 255.999... 
    // The Math.floor function is used to round down the result to the nearest integer.
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }


    // function handleRandomGradient(){
    //     const gradient = `linear-gradient(to right, ${handleRandomHex()}, ${handleRandomHex()})`;
    //     setGradientColor(gradient);
    // }

    return(
        <div style={{
            width:"100vw",
            height:"100vh",
            backgroundColor:color}}>
            <h1>Random Color Generator</h1>
            <div className='button-row'>

            <button className={`button ${colorType === "HEX" ? "selected" : ""}`} onClick={()=> setColorType("HEX")}>HEX Color</button>
            <button className={`button ${colorType === "RGB" ? "selected" : ""}`} onClick={()=> setColorType("RGB")}>RGB Color</button>
            {/* <button className={`button ${colorType === "Gradient" ? "selected" : ""}`} onClick={() => setColorType("Gradient")}>Gradient</button> */}
            </div>
            {/* this means if colorType is equal to "HEX" then call handleRandomHex function otherwise call handleRandomRgb function */}
            <button className='generate' onClick={ colorType === "HEX" ? handleRandomHex : handleRandomRgb }>
                Generate Color
            </button>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection  :'column',
                gap :'20px'
                }}
            >
                <h3>{colorType === "RGB" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}