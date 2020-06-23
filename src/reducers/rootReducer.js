import { combineReducers } from "redux"
import testReducer from "../store/testReducer"

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer