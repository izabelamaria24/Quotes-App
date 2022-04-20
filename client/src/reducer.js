export const reducer = (state, action) => {
  if (action.type === "OPEN_ADD_QUOTE_FORM") {
    return {...state, isAddQuoteFormOpen: true}
  }

  if (action.type === "CLOSE_ADD_QUOTE_FORM") {
    return {...state, isAddQuoteFormOpen: false}
  }

  if (action.type === "FETCH_QUOTES") {
    return {...state, quotes: action.payload}
  }

  if (action.type === "SET_SEARCH") {
    return {...state, search: action.payload.target.value}
  }
}
