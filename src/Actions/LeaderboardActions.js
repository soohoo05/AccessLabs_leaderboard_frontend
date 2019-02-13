

//actual fetch command
export const loadLeaderboard = leaderboard => {
    return function thunk(dispatch){
        return fetch('http://localhost:3000/api/v1/users')
        .then(r => r.json())
        .then(leaderboard => dispatch(getLeaderboard(leaderboard)))
    }
}
//passing the fetch to here to pass type and payload to reducer
//console does show that leaderboard is correctly rendered
const getLeaderboard = leaderboard => {
    console.log(leaderboard)
  return {
    type: "LOAD_LEADERBOARD",
    payload: leaderboard
  };
};