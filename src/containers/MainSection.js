import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'

// 无状态组件和数据之间的连接 

// 通过 redux的 connect方法获取 store 中的state数据和 dispatch 方法
// mapStateToProps 获取state 数据 在container 中处理数据

// 获得已完成的数量 num  获得数据的总条数

const mapStateToProps = state => ({
    todosCount: state.todos.length,
    completedCount: getCompletedTodoCount(state)
    // getCompletedTodoCount store 分发的 state 再处理返回值 封装处理
})

// function mapDispatchToProps(dispatch) {
//   return {
//     handleClickEvent: () => dispatch(getAppValue),
//     myAppOnclick: () => dispatch(pressEventAction),
//   }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         actions: () => dispatch(TodoActions)
//     }
// }

// bindActionCreators dispatch 多个 action 到props 中
// bindActionCreators的作用是将一个或多个action和dispatch组合起来生成mapDispatchToProps需要生成的内容。


// containers中的App.js中使用redux的connect方法获取store中的state数据和dispatch方法，然后action中声明好类型，
// 然后再通过js事件去触发导出的action方法，因为在bindActionCreators方法中已经把actions和dispatch合并（相当于dispatch({type:type.ADD_ITEM, text})），
// 这样就相当于在containers中这样调用dispatch去改变store中的数据：

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection)
