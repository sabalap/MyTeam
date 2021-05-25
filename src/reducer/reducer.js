import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    FLIPPED,
    BACKFLIPPED
} from "../actions";
const reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, isSidebarOpen: true }
    }
    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, isSidebarOpen: false }
    }
    if (action.type === FLIPPED) {
        return { ...state, isFlipped: true }
    }
    if (action.type === BACKFLIPPED) {
        return { ...state, isFlipped: false }
    }
}
export default reducer;