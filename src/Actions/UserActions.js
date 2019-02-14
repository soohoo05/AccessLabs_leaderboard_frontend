import axios from "axios";

export const signUp = (user, history) => {
  return dispatch => {
    return axios
      .post(`http://localhost:3000/api/v1/users`, {
        user
      })
      .then(json => {
        localStorage.setItem("token", json.data.jwt);
        dispatch({ type: "SET_USER", payload: json.data.user.user });
        history.replace(`/User/${json.data.user.user.username}`)
      })
      .catch(error => alert("User already made or field(s) were left blank"));
  };
};

export const makeRejection = (theRejection) => {
  return dispatch => {
    return axios.post(`http://localhost:3000/api/v1/rejections`,{
      params:{
        rejection:theRejection
      }
    })
    .then(json=>{
      dispatch({ type: "SET_USER", payload: json.data.user });
    })
  }
}


export const destroyRejection = (theRejection)=>{
  return dispatch =>{
    return axios.delete(`http://localhost:3000/api/v1/rejections/${theRejection.id}`)
      .then(json=>{
        console.log(json)
        dispatch({ type: "SET_USER", payload: json.data.user });
      })
  }
}
