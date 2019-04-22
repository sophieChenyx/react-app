// 展示的选择框
import React from  'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'


// QQQQQQ直接接收了 state中的值了吗 不需要提取吗 直接就通过 connect 中间件连接了吗
// 这样写组件的话 和用class 的方式是有什么区别吗
// QQQQQQQ actions 以对象的形式直接传入
const MainSection = ({ todosCount, completedCount, actions }) => (
    <section className="main">
        {
            !!todosCount &&
            <span>
              <input
                className="toggle-all"
                type="checkbox"
                checked={completedCount === todosCount}
                readOnly
              />
              <label onClick={actions.completeAllTodos} />
            </span>
        }
        <VisibleTodoList />
        {
            !!todosCount &&
            <Footer
                completedCount={completedCount}
                activeCount={todosCount - completedCount}
                onClearCompleted={actions.clearCompleted}
            />
        }
    </section>
)

MainSection.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

export default MainSection