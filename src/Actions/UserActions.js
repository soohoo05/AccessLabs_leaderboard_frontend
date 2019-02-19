import axios from "axios";

export const logIn = user => {
  return {
    type: "SIGN_IN",
    payload: user
  };
};

export const signUp = (user, history) => {
  return dispatch => {
    return axios
      .post(`http://localhost:3000/api/v1/users`, {
        user
      })
      .then(json => {
        localStorage.setItem("token", json.data.jwt);
        dispatch({ type: "SET_USER", payload: json.data.user.user });
        history.replace(`/`)
      })
      .catch(error => alert("User already made or field(s) were left blank"));
  };
};

export const signIn = (user,history) => {
    return function thunk(dispatch) {
      return fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            username: user.username,
            password: user.password
          }
        })
      })
        .then(r => r.json())
        .then(res => {
          localStorage.setItem("token", res.jwt);

          dispatch(logIn(res.user.user));
          history.replace(`/`)
        });
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
