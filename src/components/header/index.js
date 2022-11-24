import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    render(){
      return(
        <div className="todo-header">
          <input type="text" placeholder="輸入待辦事項" onKeyUp={this.handleKeyUp}/>
        </div>
      )
    }

    handleKeyUp = (event)=>{
      const {target,keyCode} = event
      if(keyCode !== 13) return
      if(target.value.trim() === '') {
        alert('輸入不得為空白')
        target.value = ''
        return
      }
      const todoObj = {id:nanoid(),name:target.value,done:false}
      this.props.addTodo(todoObj)
      target.value = ''
    }
}