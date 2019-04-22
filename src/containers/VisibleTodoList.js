
// input可视窗口的内容 内容和行为的绑定行为地方

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from "../selectors";

// 分发state 到子组件的属性中
const mapStateToProps= state => ({
    filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
