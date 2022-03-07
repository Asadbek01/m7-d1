import { createStore , compose, applyMiddleware, combineReducers } from 'redux'
import  thunk  from 'redux-thunk'
import favouriteReducer from '../reducers/Favourites'
import FetchedJobsReducer from '../reducers/FetchedJobs'
import localStorage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
export const initialState = {
    favourites: {
        likes:[]
    },

    elements : {
     jobs:[],
     isLoading: true,
     isError: false
    }
}
const persistConfig = {
    key: "root", 
    storage: localStorage,
      transforms: [
        encryptTransform({
          secretKey: "jbhsdjcbdhbjb",
        })
    ]
  }

const combinedReducers = combineReducers({
    favourites: favouriteReducer,
    elements: FetchedJobsReducer
}) 

const composeFunction =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const configureStore = createStore(
    persistedReducer,
    initialState,
    composeFunction(applyMiddleware(thunk))
    )
    const persistor = persistStore(configureStore)

    export  {configureStore, persistor }