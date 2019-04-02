import React, { Component } from 'react'

class Card extends Component {
  render() {
    const {name, email , id , username } = this.props
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        
        <img src={`https://robohash.org/${id}?200x200`} />
        <div id={id}>
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}

export default Card
  



//alternative component
// const Card =(props)=> {
//   render() {
//     return (
//       <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        
//         <img src="https://robohash.org/vin?200x200" />
//         <div id={props.id}>
//           <h2>{props.name}</h2>
//           <p>{props.username}</p>
//           <p>{props.email}</p>
//         </div>
//       </div>
//     )
//   }
// }

// export default Card
  