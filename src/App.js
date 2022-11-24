import React from 'react';
import { Component } from 'react';
import Header from './components/header';
import List from './components/list';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  state = {
    todos : [
      {id:'001',name:'睡覺',done:true},
      {id:'002',name:'吃飯',done:false},
      {id:'003',name:'看書',done:false}
    ]
  }

  render() {
    const {todos} = this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} checkChangeTodoDone={this.checkChangeTodoDone} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} deleteAllDoned={this.deleteAllDoned} checkAll={this.checkAll}/>
        </div>
      </div>
    )
  }

  checkAll = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}
    })
    this.setState({
      todos : newTodos
    })
  }

  deleteAllDoned = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    this.setState({
      todos : newTodos
    })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({
      todos : newTodos
    })
  }

  addTodo = (todoObj) =>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({
      todos : newTodos
    })
  }

  checkChangeTodoDone=(id,done) =>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({
      todos : newTodos
    })
  }
}

export default App;
