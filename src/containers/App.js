import React, { Component } from 'react';
import { connect } from  'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions'


const mapStateToProps = state => {
  console.log('state : ', state )
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        return response.json();
      })
      .then(users=>{
        console.log(users)
        this.setState({
          robots: users
        })
      })
   
  }
  onSearchChange= (event)=>{
    this.setState({
      searchField: event.target.value
    })
  }

  render() {

    const { robots, searchField } = this.state
    const filterRobots = robots.filter(robot=> {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return !robots.length ? 
       <h1 className="tc">Loading...</h1>
      :
       (
        <div className="tc">
          <h1>Robotic Devs</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
            
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);