import { FETCHED_BOOKS_ERROR, GET_FETCHED_BOOKS, GET_FETCHED_BOOKS_LOADING } from "../actions"
import { initialState } from "../store"

export default function FetchedJobsReducer(state = initialState.elements, action) {

    switch(action.type) {
       case GET_FETCHED_BOOKS:
           return{
               ...state,
               jobs: action.payload
           }
           case FETCHED_BOOKS_ERROR:
               return{
                   ...state,
                   isError: true
               }
               case GET_FETCHED_BOOKS_LOADING:
               return{
                   ...state,
                   isLoading: false
               }
        default: 
            return state
    }

}