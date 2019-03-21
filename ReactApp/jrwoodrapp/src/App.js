import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LordOfLists from './components/LordOfLists';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getList } from './actions/index';

class App extends Component {

componentDidMount() {
  this.props.getList();
}

  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" render={() => {
          return <LordOfLists lordList={this.props.lordList} />
        }} />
        
      </div>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    lordList: state.lordList
  }
}


export default connect(mapStateToProps, { getList })(App);
