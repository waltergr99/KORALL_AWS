import { FETCH_ALL_COASTERS, GET_COASTER_BY_ID} from './types'
import http from "../../services/api-aws.service"

export const fetchAllCoasterFromAWS = () => (dispatch) => {
    http.get('/coaster').then(response => {
        const data = JSON.parse(response.data.body)
        const coasters = data.Items.sort((a, b) => a.id - b.id)

        dispatch({
            type: FETCH_ALL_COASTERS,
            payload: coasters
        })
    })
}

export const getCoasterByID = (coasterId) => (dispatch, getState) => {
    const coasters = getState().products.coasters
    const coaster = coasters.find(c=> c.id === coasterId)
    dispatch({
        type: GET_COASTER_BY_ID,
        payload: coaster
    })
}