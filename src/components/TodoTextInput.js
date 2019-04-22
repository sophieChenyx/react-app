
// 写个todolist 头都要晕了 晕死我了
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

// 向下传递三个参数
// newTodo
// onSave={(text) => {
//     if (text.length !== 0) {
//         addTodo(text)
//     }
// }}
// placeholder

// 还有的相关参数 editing newTodo

export default class TodoTextInput extends Component {

    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if(e.which === 13) {
            this.props.onSave(text)
            if(this.props.newTodo) {
                this.setState({text: ''})
            }
        }
    }
    handleChange = e => {
        this.setState({text: e.target.value})
    }

    handleBlur = e => {
        if(!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }


    render() {
      return (
        <input 
            className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })
            }
            type='text'
            placeholder={this.props.placeholder}
            audofocus="true"
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
        />
      )
    }
}

// 最后的input 可以复用的输入框？？ edit 的时候是怎么做的呢

