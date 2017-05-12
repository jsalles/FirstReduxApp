import React, { Component} from 'react'
import { AppRegistry, View } from 'react-native'

import { actionCreators } from './redux/ListRedux'
import Title from './components/Title'
import Input from './components/Input'
import List from './components/List'

class App extends Component { 
  state = {
  }
  //////
  // action controllers
  onAddTodo = (text) => {
    const {store} = this.props

    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {store} = this.props

    store.dispatch(actionCreators.remove(index))
  }
  //////
  // lifecycle events
  componentWillMount() {
    const {store} = this.props
    const {todos} = store.getState()

    this.setState({todos})

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  //////
  // UI events
  render() {
    const {store} = this.props;
    const {todos} = store.getState()

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Entre com novo item!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
  //////
}

export default App