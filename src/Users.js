import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/action';

class Users extends Component {

    render() {
        const users = this.props.users.map((user)=>{
            if(user["status"]!=="deleted"){
                return (
                    <tr key={user["id"]}>
                        <td> {user["name"]} </td>
                        <td> {user["gender"]} </td>
                        <td> {user["dob"]} </td>
                        <td><button onClick={()=>this.props.deleteUser(user["id"])}>Delete</button></td>
                    </tr>
                )
            }
            else return null
          })
        return(
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Gender</th>
                        <th> DOB </th>
                        <th> Operation </th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps= (state) => {
    return {
      users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
      deleteUser: (id) => dispatch(actions.deleteUser(id))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Users);