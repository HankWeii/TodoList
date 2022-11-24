import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    const {todos} = this.props
    const todoTotal = todos.length
    const todoDoned = todos.reduce((prev,todo)=>{
      return prev + (todo.done ? 1 : 0)
    },0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={todoDoned === todoTotal && todoTotal !== 0 ? true : false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{todoDoned}</span> /  {todoTotal}
        </span>
        <button className="btn btn-danger" onClick={this.handleDeleteAllDoned}>清除已完成事項</button>
      </div>
    )
  }

  handleCheckAll = (event) =>{
    this.props.checkAll(event.target.checked)
  }

  handleDeleteAllDoned=() =>{
    this.props.deleteAllDoned()
  }
}