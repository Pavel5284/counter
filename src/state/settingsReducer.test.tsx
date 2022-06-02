import {setStartValueAC, settingsReducer, StatusType} from "./settingsReducer";

test('setStartValue', () => {
    const startState = {
        maxValue: 5,
        startValue: 0,
        status: 'counter' as StatusType
    }
    const newStartValue = 1
    const endState = settingsReducer(startState, setStartValueAC(newStartValue))

    expect(endState.startValue).toBe(newStartValue)
})