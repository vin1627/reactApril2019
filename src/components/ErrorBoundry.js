import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props){
    super(props);
    this.state ={
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({
      hasError: true
    })
  }
  render() {
    if(this.state.hasError){
      return (
        <div>
            <h1>Error Not Found!</h1>
        </div>
      )
    }else{
      return this.props.children
    }
  }
}

export default ErrorBoundry;
