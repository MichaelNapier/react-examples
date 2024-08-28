import { useState, useEffect, useRef } from 'react'
import './style.css'


export default function Stopwatch() {
    
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - time
        console.log(startTimeRef.current)
    }

    function stop() {
        setIsRunning(false)
    }
    function reset() {
        setTime(0)
        setIsRunning(false)
    }

    function formatTime(){

        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor(time / (1000 * 60) % 60);
        let seconds = Math.floor(time / (1000) % 60);
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return `${hours}:${minutes}:${seconds}`;
    }
    
    
    return (
        <div className='stopwatch-container'>
            <h1>Stopwatch</h1>
            <div className='stopwatch'>
                {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className='controls'>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button> */}
                <div className='display'>
                    {formatTime(time)}
                </div>
                <div className='controls'>
                    <button className='start-stopwatch' onClick={start}>Start</button>
                    <button className='stop-stopwatch' onClick={stop}>Stop</button>
                    <button className='reset-stopwatch' onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}