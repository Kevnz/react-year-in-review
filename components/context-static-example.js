import React, { Component } from 'react'
const AppContext = React.createContext()
class AppProvider extends Component {
 state = {
    number : 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
 render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

class Green extends Component {
  static contextType = AppContext
  render() {
    return (
      <div className="green" style={{
        margin: 20,
        marginLeft: 0,
        width: 350,
        height: 100,
        fontSize: 40
      }}>
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
        <button style={{
          margin: 20,
          marginLeft: 0,
          width: 350,
          height: 100,
          fontSize: 40
        }} onClick={this.context.inc}>INC</button>
        <Green />
      </div>
    )
  }
}

const App = () => {
  return <AppProvider><Blue /></AppProvider>
}

export default App