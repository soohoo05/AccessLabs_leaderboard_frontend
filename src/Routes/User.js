import React from 'react'
import {Link} from 'react-router-dom'


class User extends React.Component{
 componentWillMount(){
     const {username} = this.props.match.params
     console.log(username)
 }
    render(){
        return(
            <h1>JJ</h1>
        )
    }
}
export default User
