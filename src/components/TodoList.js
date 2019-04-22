import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({
    filteredTodos,
    actions
}) => (
    <ul className="rodo-list">
        {filteredTodos.map( todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
        )}
    </ul>
)

// QQQQQQQQ 这个位置的是什么意思 PropsTypes的相关用法
TodoList.propTypes = {
    filteredTodos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}

export default TodoList