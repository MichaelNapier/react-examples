
import "./style.css";


export default function Calculator() {
    
    
    
    return (
        <div className="Calculator-Container">
            <h1>Calculator</h1>
            <div className="calc-container">
                <input type="text" className="result" />
                <div className="keypad">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>/</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>*</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>-</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                    <button>+</button>
                    <button>C</button>
                </div>
                <div className="history">
                    <p>History</p>
                </div>
            


            </div>
        </div>
    )
}