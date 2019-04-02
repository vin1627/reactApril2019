import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:''
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
      searchfield: event.target.value
    })
  }

  render() {
    const { robots, searchfield } = this.state
    const filterRobots = robots.filter(robot=> {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    return !robots.length ? 
       <h1 className="tc">Loading...</h1>
      :
       (
        <div className="tc">
          <h1>Robotic Devs</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
            
        </div>
      )
  }
}
  // another way
  // render() {
  //   const { robots, searchfield } = this.state
  //   const filterRobots = robots.filter(robot=> {
  //     return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  //   })
  //   if(!robots.length){
  //     return <h1>Loading</h1>
  //   }else{
  //     return (
  //       <div className="tc">
  //         <h1>Robotic Devs</h1>
  //         <SearchBox searchChange={this.onSearchChange}/>
  //         <Scroll>
  //           <CardList robots={filterRobots} />
  //         </Scroll>
            
  //       </div>
  //     )

  //   }
  // }
  //}

export default App