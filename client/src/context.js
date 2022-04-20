import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const initialState = {
    isAddQuoteFormOpen: false,
    search: ''
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

  const setSearch = (e) => {
    dispatch({ type: 'SET_SEARCH', payload: e })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        openAddQuoteForm,
        closeAddQuoteForm,
        getCurrentUser,
        setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
