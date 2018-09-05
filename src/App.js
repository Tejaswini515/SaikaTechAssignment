import React, { Component } from 'react';
import './App.css';
import Users from './Users.js'
import { connect } from 'react-redux';
import * as actions from './store/action';

class App extends Component {
 
  render() {
    console.log(this.props.users);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Details</h1>
        </header>
        <Users/>
      </div>
    );
  }

  componentDidMount(){
    this.props.getUsersData()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersData: () => dispatch(actions.getUsers())
  };
};

export default connect(null,mapDispatchToProps)(App);
