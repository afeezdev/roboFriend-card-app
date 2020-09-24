import React, { Component }from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';

import { setSearchField } from '../redux/robotSearch/robotSearch.action';
import { fetchRobots } from '../redux/robotRequest/robotRequest.action';

import './App.css';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () =>dispatch(fetchRobots())
    }
  }

class App extends Component{
     
    componentDidMount() {
        this.props.onRequestRobots();
    }

      render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
          })
        return isPending ?
          <h1>Loading</h1> :
            (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange ={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
    
            </div>
        );
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);