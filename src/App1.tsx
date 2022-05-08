import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [text, setText] = useState<string>('enter values and press set')

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
    }

    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])



  /*  useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
    }, [value])*/

    const setHandler = () => {
        if (maxValue <= value){
            setError(true)
            setDisabled(true)
            setText('Incorrect Value!')
        } else {
            setError(false)
            setDisabled(false)
        }
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setValue(value)
        setMaxValue(maxValue)
    }

  const incHandler = () => {
        if (value < maxValue) {
            setValue(value + 1)
            localStorage.setItem('value', JSON.stringify(value+1))
        } else {
            setDisabled(true)
            setError(true)
            setText('max value is limit')
        }


  }

 /* const setToLocalStorageHandler=()=> {
      localStorage.setItem('counterValue', JSON.stringify(value))
      localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
  }*/



  const clearLocalStorage = () => {
      localStorage.clear()
      setValue(0)
  }

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(JSON.parse(e.currentTarget.value))
  }
  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (maxValue <= value) {
          setError(true)
            setMaxValue(JSON.parse(e.currentTarget.value))
      } else {
          setError(false)
          setMaxValue(JSON.parse(e.currentTarget.value))
      }

  }

  /*const removeItemFromLocalStorageHandler = () => {
      localStorage.removeItem('counterValue + 1')
  }*/

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
        <button onClick={clearLocalStorage}>reset</button>
        <div className="start_value">
            <span>start value:</span>
            <input onChange={onChangeStartValueHandler}
                type="number"
                    value={value}
            />
            <button onClick={setHandler} disabled={disabled}>set</button>
        </div>
        <div className="max_value">
            <span>max value:</span>
            <input onChange={onChangeMaxValueHandler}
                   type="number"
                   value={maxValue}
            />
        </div>
        <span></span>
    </div>
  );
}

/*export default App;*/
