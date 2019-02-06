const loadLeaderboard = (prevState, action) => {
  return {
    ...prevState,
    leaderboard: action.payload
  }
}
//switch statement to choose which function to run 
const reducer = (prevState = initialState, action) => {
    switch(action.type){
        case "LOAD_LEADERBOARD":
            return loadLeaderboard(prevState, action);
        default:
            return prevState
    }

}
