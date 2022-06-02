import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Settings} from "./components/settings/Settings";
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./state/store";
import {setMaxValueAC, setStartValueAC, setStatusAC, StatusType} from "./state/settingsReducer";
import {setCountAC} from "./state/scoreboardReducer";



export const App = () => {

   const startValue = useSelector<AppStateType, number>(state => state.settings.startValue)
    const dispatch = useDispatch()

    const setStartValue = (value: number) => {
       dispatch(setStartValueAC(value))
    }

    const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue)
    const setMaxValue = (value: number) => {
       dispatch(setMaxValueAC(value))
    }
    const count = useSelector<AppStateType, number>(state => state.scoreboard.count)
    const setCount = (value:number) => {
       dispatch(setCountAC(value))
    }
    const status = useSelector<AppStateType, StatusType>( state => state.settings.status)
    const setStatus = (value: StatusType) => {
       dispatch(setStatusAC(value))
    }

   // const [startValue, setStartValue] = useState<number>(0)
   // const [maxValue, setMaxValue] = useState<number>(5)
    //const [count, setCount] = useState<number>(startValue)
    //const [status, setStatus] = useState<StatusType>('counter')



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