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
      .post(`https://leaderboard-backend.herokuapp.com/api/v1/users`, {
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
      return fetch("https://leaderboard-backend.herokuapp.com/api/v1/login", {
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
            if(res.jwt !== undefined){
                localStorage.setItem("token", res.jwt);

                dispatch(logIn(res.user.user));
                history.replace(`/`)
            }else{
                alert("Combination was Wrong")
            }
        })
    };
  };

export const makeRejection = (theRejection) => {
  return dispatch => {
    return axios.post(`https://leaderboard-backend.herokuapp.com//api/v1/rejections`,{
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
    return axios.delete(`https://leaderboard-backend.herokuapp.com/api/v1/rejections/${theRejection.id}`)
      .then(json=>{
        dispatch({ type: "SET_USER", payload: json.data.user });
      })
  }
}
export const DeleteUser = (userId,history) =>{
  return dispatch => {
    return axios
      .delete(`https://leaderboard-backend.herokuapp.com/api/v1/users/${userId}`)
      .then(json=> {
        dispatch({type:"DELETE_USER"})
        history.replace('/')
        localStorage.clear()
      })
  }
}
