import { createStore } from "redux"
import testReducer from "./testReducer"

export const configureStore = () => {
    const store = createStore(testReducer)

    return store
}