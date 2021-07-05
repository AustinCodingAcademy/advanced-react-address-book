export function setCurrentUser(user){
 return {
   type:"SET_CURRENT_USER",
   value: user
 }
}

export function setSearchText(text) {
  return {
    type: "SET_TEXT",
    value: text
  }
}
