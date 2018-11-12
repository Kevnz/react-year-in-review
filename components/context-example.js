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
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}
const Green = () => (
  <div className="green" style={{
    margin: 20,
    marginLeft: 0,
    width: 350,
    height: 100,
    fontSize: 40
  }}>
     <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
  </div>
)
const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => <button style={{
          margin: 20,
          marginLeft: 0,
          width: 350,
          height: 100,
          fontSize: 40
        }} onClick={context.inc}>INCREMENT</button>}
      </AppContext.Consumer>
    <Green />
  </div>
)

const App = () => {

  return <AppProvider><Blue></Blue></AppProvider>
}

export default App