
// 每一个item 的相关模版

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    }   

    state = {
        editing: false
    }

    // QQQQQQ到这里基本上逻辑就是越写越乱了
    handleDoubleClick = () => {
        this.setState({
            editing: true
        })
    }

    handleSave = (id, text) => {
        if (text.length) {
            this.props.deleteTodo(id)
        } else {
            this.props.editTodo(id, text)
        }
        this.setState({ editing: false })
    }
    
    render() {
        // completeTodo 从上个页面承接到的数据变量

        const { todo, completeTodo, deleteTodo } = this.props
        let element

        if (this.state.editing) {
            element = (
              <TodoTextInput
                text={todo.text}
                editing={this.state.editing}
                onSave={(text) => this.handleSave(todo.id, text)}
              />
            )
        } else {
            element = (
              <div className="view">
                <input 
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => completeTodo(todo.id)}
                />
                <label onDoubleClick={this.handleDoubleClick}>
                  {todo.text}
                </label>
                <button 
                  className="destory"
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            )
        }
        return (
            <li 
              className={classnames({
                completed: todo.completed,
                editing: this.state.editing
              })}
            >
              {element}
            </li>
        )
    }
}