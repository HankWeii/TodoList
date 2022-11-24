import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
      mouse : false
    }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return(
      <li style={{backgroundColor : mouse ? '#ddd' : ''}} onMouseEnter={this.mouseUp} onMouseLeave={this.mouseUp}>
        <label>
          <input type="checkbox" checked={done ? true : false} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>刪除</button>
      </li>
      
    )
  }
  handleCheck = (id) =>{
    return (event) => {
      this.props.checkChangeTodoDone(id,event.target.checked)
    }
  }

  mouseUp = () => {
    this.setState({
      mouse : !this.state.mouse
    })
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id)
  }

  
}