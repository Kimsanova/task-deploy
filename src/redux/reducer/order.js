import {DECREMENT, INCREMENT} from "../constants";

export default (state = {}, action) => {
    const {type, payload} = action

    switch (type) {
        case INCREMENT:
            return {
                ...state,
                [payload.id]: (state[payload.id] || 0) + 1
            }
        case DECREMENT:
            return {
                ...state,
                [payload.id]: (state[payload.id] || 0) - 1
            }
        default:
            return state
    }
}