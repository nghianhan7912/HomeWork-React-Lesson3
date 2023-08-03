import {createStore} from 'redux'
import { rootRedux } from './rootReducer'

export const store = createStore(
    rootRedux,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)