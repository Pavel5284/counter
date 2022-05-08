import {StatusType} from "../../App";
import s from './Scoreboard.module.css';

type ScoreboardType = {
    count: number
    setCount: (value: number) => void
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    status: StatusType
}

export const Scoreboard = (props: ScoreboardType) => {
    const incHandler = () => {
        if (props.count < props.maxValue) {
            localStorage.setItem('count', JSON.stringify(props.count + 1))
            props.setCount(props.count + 1)
        }
    }

    const resetHandler = () => {

        localStorage.clear()
        props.setCount(props.startValue)
        props.setStartValue(props.startValue)
        props.setMaxValue(props.maxValue)


    }
  return (
      <div>
      <div className={s.count}>
          <h1>{props.count}</h1>
      </div>
      <div className={s.buttons}>
          <button className={s.button} onClick={incHandler} disabled={props.count >= props.maxValue}>Inc</button>
          <button className={s.button} onClick={resetHandler}>Reset</button>
      </div>
</div>
  )
}