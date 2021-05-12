import React, {useContext, useReducer, useEffect} from 'react';
import reducer from '../reducer/stateReducer';
import {SIDEBAR_CLOSE, SIDEBAR_OPEN} from '../utils/actions'

const stateContext = React.createContext();

const initState = {
    isSidebarOpen: false
}

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const openSidebar = () => {
        dispatch({type: SIDEBAR_OPEN})
    }

    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE})
    }

    return (
        <stateContext.Provider value={{...state, dispatch, openSidebar, closeSidebar}}>{children}</stateContext.Provider>
    )
}

export const useStateContext = () => {
    return useContext(stateContext)
}
