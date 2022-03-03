import { createStore , compose, applyMiddleware, combineReducers } from 'redux'
import  thunk  from 'redux-thunk'
import favouriteReducer from '../reducers/Favourites'
import FetchedJobsReducer from '../reducers/FetchedJobs'

export const initialState = {
    favourites: [],

    elements : {
     jobs:[],
     isLoading: true,
     isError: false
    }
}

const combinedReducers = combineReducers({
    favourites: favouriteReducer,
    jobs: FetchedJobsReducer
}) 

const composeFunction =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = createStore(
    combinedReducers,
    initialState,
    composeFunction(applyMiddleware(thunk))
    )
    export default configureStore