// 无状态组件

import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'



const Header = ({ addTodo }) => (
    <header className='hreader'>
        <h1>todo lists</h1>
        <TodoTextInput
            newTodo
            onSave={(text) => {
                if (text.length !== 0) {
                  addTodo(text)
                }
            }}
            placeholder="input what you want to write in redux cyx抄都抄不会"
        />
    </header>
)

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Header