import { createStore } from "redux"
import Reducer from "../reducer"

const InitialState ={
favourites:{}
}


export default function ConfigureStore() {
  return createStore(InitialState, Reducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
}


