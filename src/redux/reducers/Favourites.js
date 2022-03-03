import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions"
import { initialState } from "../store"

export default function favouriteReducer(state = initialState.favourites, action) {

    console.log(action, state)

    const { type, payload } = action

    switch(type) {
        case ADD_TO_FAV: 
            return {
                ...state,
                favourites: [...state.favourites, payload]
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                favourites: state.favourites.filter(company => company !== payload)
            }
        default: 
            return state
    }

}