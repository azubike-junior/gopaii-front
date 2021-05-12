import { SIDEBAR_CLOSE, SIDEBAR_OPEN} from '../utils/actions'

const stateReducer = (state, action) => {
    switch(action.type){
        case SIDEBAR_OPEN:
            return { ...state, isSidebarOpen: true };

        case SIDEBAR_CLOSE:
             return { ...state, isSidebarOpen: false };

        default: {
            return state
        }
    }
}

export default stateReducer
