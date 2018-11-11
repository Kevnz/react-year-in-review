import React, { Component } from 'react'

import ExampleContext from './define-context'


class ExampleProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: true,
      items: [],

    }
  }
  updateItem = item => {
    updateItemInStorage(item)
    this.setState({ items: getItemsFromStorage() })
  }
  saveItem = item => {
    saveItemToStorage(item)
    this.setState({ items: getItemsFromStorage() })
  }
  toggleItems = value => {
    this.setState({
      showCompleted: value,
    })
  }
  completeItem = item => {
    updateItemInStorage(item)
    this.setState({ items: getItemsFromStorage() })
  }
  deleteItem = () => {
    this.setState({
      title: `Cat #${randomNumber()}`,
    })
  }

  render() {
    const { children } = this.props

    return (
      <ExampleContext.Provider value={this.state}>
        {children}
      </ExampleContext.Provider>
    )
  }
}

export default ExampleProvider
