import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  render() {
    const robots = this.props.robots
    const cardComponentData = robots.map((user, i) =>{
      return  <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[0].username} />
    })

    return (
      <div className="">
        {cardComponentData}
      </div>
    )
  }
}

export default CardList
  