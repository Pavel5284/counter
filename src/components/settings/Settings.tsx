import s from './Settings.module.css';
import {ChangeEvent} from "react";
import {StatusType} from "../../state/settingsReducer";

export type ScorebooardPropsType = {
    startValue: number
    maxValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    status: StatusType
    setStatus: (value: StatusType) => void
    setCount: (startValue: number) => void
}

 export const Settings = (props: ScorebooardPropsType) => {
    if (props.maxValue <= props.startValue || props.startValue < 0) {
        props.setStatus('error')
    }

     const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
         isNaN(value) ? props.setMaxValue(0) :
             value > 9999 ? props.setMaxValue(9999) :
                 props.setMaxValue(value)
         props.setStatus('set')
     }


     const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
         let value = e.currentTarget.valueAsNumber
         isNaN(value) ? props.setStartValue(0) :
             value > 9999 ? props.setStartValue(9999) :
                 props.setStartValue(value)
         props.setStatus('set')
     }

    const setButtonOnChange = () => {
        localStorage.setItem('startValue', JSON.stringify(props.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
        props.setStatus('counter')
        props.setCount(props.startValue)
    }
    return (
        <div className={s.settings}>
            <div className={s.values}>
                <div className={s.value_string}>
                    <h3 className={s.value_string__title}>MAX VALUE: </h3>
                    <input onChange={onChangeMaxValueHandler}
                    type="number"
                           value={props.maxValue}
                    />
                </div>
                <div className={s.value_string}>
                    <h3 className={s.value_string__title}>START VALUE: </h3>
                    <input onChange={onChangeStartValueHandler}
                           type="number"
                           value={props.startValue}
                    />
                </div>
                <button
                    className={s.button}
                    onClick={setButtonOnChange}
                        disabled={props.status !== 'set'}
                >
                    SET
                </button>
            </div>
        </div>
    )
}

