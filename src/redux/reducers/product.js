import { FETCH_ALL_COASTERS, GET_COASTER_BY_ID } from '../actions/types'

const initialState = {
    coasters: [],
    coaster: {}
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_COASTERS:
            return {
                ...state,
                coasters: action.payload
            }
        case GET_COASTER_BY_ID:
            return {
                ...state,
                coaster: action.payload
            }
        default:
            return {
                ...state
            }
    }
}