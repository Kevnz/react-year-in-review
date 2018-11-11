import React, { Component } from 'react'

class Green extends Component {
  static contextType = AppContext
  render() {
    return (
      <div className="green">
        {this.context.number}
      </div>
    )
  }
}

class Blue extends Component {
  static contextType = AppContext
  render() {
    return (
      <div className="blue">
        <button onClick={this.context.inc}>INC</button>
        <Green />
    </div>
    )
  }
}