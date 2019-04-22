
import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

// 有状态的组件 通过container引入 然后container 里面表现最多的是交互


// 无状态组件中的 actions 量，state 由父组件传入
import { 
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
} from '../constants/TodoFilters'

// 底部选择 常量按钮
const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
}


// props 由父组件传入
const Footer = (props) => {
    const { activeCount, completedCount, onClearCompleted } = props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount || 'No'}</strong>
                {itemWord}
                left
            </span>
            <ul className='filters'>
                {Object.keys(FILTER_TITLES).map(filter => {
                    return (
                      <li key={filter}>
                        <FilterLink filter={filter}>
                            {FILTER_TITLES[filter]}
                        </FilterLink>
                      </li> 
                    ) 
                })}
            </ul>
            {
                !!completedCount &&
                <button
                  className="clear-completed"
                  onClick={onClearCompleted}
                >
                  clear Completed
                </button>
            }
        </footer>
    )
}

Footer.propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired
}

export default Footer