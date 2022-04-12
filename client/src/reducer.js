export const reducer = (state, action) => {
  if (action.type === "OPEN_ADD_QUOTE_FORM") {
    return {...state, isAddQuoteFormOpen: true}
  }

  if (action.type === "CLOSE_ADD_QUOTE_FORM") {
    return {...state, isAddQuoteFormOpen: false}
  }
  //
  // if (action.type === "GET_CURRENT_USER") {
  //   const { user } = action.payload
  //   return {...state, user: {username: user.username, profilePicture: user.profilePicture, _id: user._id}}
  // }

  if (action.type === "FETCH_QUOTES") {
    return {...state, quotes: action.payload}
  }
}
