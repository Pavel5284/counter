import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Settings} from "./components/settings/Settings";
import {Scoreboard} from "./components/scoreboard/Scoreboard";

export type StatusType = 'counter' | 'set' | 'error'

export const App = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const [status, setStatus] = useState<StatusType>('counter')



 /*   useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])*/

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            setStartValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
        let countAsString = localStorage.getItem('count')
        if (countAsString) {
            let newValue = JSON.parse(countAsString)
            setCount(newValue)
        }
    }, [])

    /*const setHandler = () => {
        if (maxValue <= startValue) {
            setError(true)
            setDisabled(true)
            setText(`Incorrect value!`)
        } else {
            setError(false)
            setDisabled(false)
            setCount(startValue)
        }
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setCount(startValue)
    }*/

/*
    const incHandler = () => {
        if (count < maxValue) {
            setCount(state => state && state + 1)
        }
    }

    const resetHandler = () => {
        setCount(startValue)
    }
*/



/*    const incDisabled = count === maxValue || count === null
    const resetDisabled = count === startValue || count === null

    const scoreboardClassname = count === maxValue ? `${s.counterBoard} ${s.red}` : `${s.counterBoard}` && count === null ? `${s.counterBoard} ${s.textSize}` : `${s.counterBoard}`*/



    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
           <div className={s.settings}>
               <Settings
                   maxValue={maxValue}
               setCount={setCount}
               setMaxValue={setMaxValue}
               setStartValue={setStartValue}
               setStatus={setStatus}
               startValue={startValue}
               status={status}/>
           </div>
            <div className={s.scoreboard}>
                <Scoreboard
                    status={status}
                    startValue={startValue}
                    maxValue={maxValue}
                    count={count}
                    setCount={setCount}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                />
            </div>
            </div>
        </div>
    );
};

export default App;