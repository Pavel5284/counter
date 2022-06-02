type ActionType = ReturnType<typeof setStartValueAC | typeof setMaxValueAC>
export type StatusType = 'counter' | 'set' | 'error'
//export type StartValueType = 0

type InitialStateType = typeof initialState

const initialState = {
    maxValue: 5,
    startValue: 0,
    status: 'counter' as StatusType
}

export const settingsReducer = (state: InitialStateType=initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return {...state, ...action.payload}
        case 'SET_MAX_VALUE':
            return {...state, ...action.payload}
        case 'SET_STATUS':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        payload: {startValue}
    }
}

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: {maxValue}
    }
}
export const setStatusAC = (status: StatusType) => {
    return {
        type: 'SET_STATUS',
        payload: {status}
    }
}