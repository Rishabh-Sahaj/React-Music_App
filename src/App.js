import React, { Component } from 'react';
import Albums from './compnonents/Albums';
import { connect } from 'react-redux';

class App extends Component {  
    render(){
        const {albums} = this.props;
        return (
            <div className="app container">
              <div className="row">
                <div className="col-sm-12">  
                  <Albums albums={albums} />
                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, null)(App);