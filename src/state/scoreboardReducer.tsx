

type ActionType = ReturnType<typeof setCountAC>
type InitialStateType = typeof initialState

const initialState = {
    count: 0
}

export const scoreboardReducer = (state: InitialStateType =initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_COUNT':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setCountAC = (count: number) => {
    return {
        type: 'SET_COUNT',
        payload: {count}
    }
}