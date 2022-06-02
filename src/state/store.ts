import {combineReducers, createStore} from "redux";
import {settingsReducer} from "./settingsReducer";
import {scoreboardReducer} from "./scoreboardReducer";

const rootReducer = combineReducers({
    settings: settingsReducer,
    scoreboard: scoreboardReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

type AppStoreType = typeof store