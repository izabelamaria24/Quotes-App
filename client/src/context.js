import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const initialState = {
    // user: {username: '', profilePicture: '', _id: ''},
    isAddQuoteFormOpen: false,
    quotes: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const openAddQuoteForm = () => {
    dispatch({ type: "OPEN_ADD_QUOTE_FORM" })
  }

  const closeAddQuoteForm = () => {
    dispatch({ type: "CLOSE_ADD_QUOTE_FORM" })
  }

  const getCurrentUser = (user) => {
    dispatch({ type: 'GET_CURRENT_USER', payload: user})
  }

  const fetchQuotes = (quotes) => {
    dispatch({ type: 'FETCH_QUOTES', payload: quotes })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        openAddQuoteForm,
        closeAddQuoteForm,
        getCurrentUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
