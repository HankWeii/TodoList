import React, { Component } from 'react'
import Item from '../item'
import './index.css'

export default class List extends Component {

    
  render() {
    const {todos,checkChangeTodoDone,deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo} checkChangeTodoDone={checkChangeTodoDone} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}