import React, { Component } from 'react'

class Scroll extends Component {

  render() {
    const props = this.props
    return (
      <div style={{overflow: 'scroll', border: '0px', height: '800px'}}>
        {props.children}
      </div>
    )
  }
}

export default Scroll
