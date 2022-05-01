export const reducer = (state, action) => {
  if (action.type === "OPEN_ADD_QUOTE_FORM") {
    return {...state, isAddQuoteFormOpen: true}
  }

  if (action.type === "CLOSE_ADD_QUOTE_FORM") {
    return {...state, isAddQuoteFormOpen: false}
  }

  if (action.type === "OPEN_LOG_OUT_MODAL") {
    return {...state, isLogOutModalOpen: true}
  }

  if (action.type === "CLOSE_LOG_OUT_MODAL") {
    return {...state, isLogOutModalOpen: false}
  }

  if (action.type === "OPEN_DELETE_ACCOUNT_MODAL") {
    return {...state, isDeleteAccountModalOpen: true}
  }

  if (action.type === "CLOSE_DELETE_ACCOUNT_MODAL") {
    return {...state, isDeleteAccountModalOpen: false}
  }

  if (action.type === "SET_SEARCH") {
    return {...state, search: action.payload.target.value}
  }
}
