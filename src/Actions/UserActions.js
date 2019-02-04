import axios from 'axios'

export const signUp = (user, history) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3000/api/v1/users`, {
        user
      })
      .then((json) => {
        dispatch({ type: "SET_USER", payload: json.data.user })
      })
      .catch((error) => alert("User already made or field(s) were left blank"))
  }
}
