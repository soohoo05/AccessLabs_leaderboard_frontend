let store = {
  user:""
}
const signIn = () => {
  console.log("Hello world");

};


export default function UserReducer ( state = store, action) {
  switch( action.type ){
    case "SET_USER":
      return { ...state, user: action.payload }
    case "SIGN_IN":
        return { ...state, user: action.payload }
    default:
      return state;
  }
}
