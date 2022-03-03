import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions"
import { initialState } from "../store"

export default function favouriteReducer(state = initialState.favourites, action) {


    switch(action.type) {
        case ADD_TO_FAV: 
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                likes: state.likes.filter(company => company !== action.payload)
            }
        default: 
            return state
    }

}