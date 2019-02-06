let store = {
  user:""
}

export default function UserReducer ( state = store, action) {
  switch( action.type ){
    case "SET_USER":
    console.log(action.payload)
      return { ...state, user: action.payload }
    default:
      return state;
  }
}
