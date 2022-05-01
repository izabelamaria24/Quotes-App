import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const initialState = {
    isAddQuoteFormOpen: false,
    isLogOutModalOpen: false,
    isDeleteAccountModalOpen: false,
    search: ''
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const openAddQuoteForm = () => {
    dispatch({ type: "OPEN_ADD_QUOTE_FORM" })
  }

  const closeAddQuoteForm = () => {
    dispatch({ type: "CLOSE_ADD_QUOTE_FORM" })
  }

  const openLogOutModal = () => {
    dispatch({ type: "OPEN_LOG_OUT_MODAL" })
  }

  const closeLogOutModal = () => {
    dispatch({ type: "CLOSE_LOG_OUT_MODAL" })
  }

  const openDeleteAccountModal = () => {
    dispatch({ type: "OPEN_DELETE_ACCOUNT_MODAL" })
  }

  const closeDeleteAccountModal = () => {
    dispatch({ type: "CLOSE_DELETE_ACCOUNT_MODAL" })
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
        openLogOutModal,
        closeLogOutModal,
        openDeleteAccountModal,
        closeDeleteAccountModal,
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
