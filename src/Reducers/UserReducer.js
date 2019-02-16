let store = {
  user:""
}


export default function UserReducer ( state = store, action) {
  switch( action.type ){
    case "SET_USER":
      return { ...state, user: action.payload }
    case "SIGN_IN":
        return { ...state, user: action.payload }
        case "DELETE_USER":
        console.log("du")
     return { ...state, user: "" }
    default:
      return state;
  }
}
