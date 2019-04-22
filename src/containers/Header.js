
// 引入基本需要的无状态组件 和 component 注入 state 注册成为高阶组件

import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from "../actions";

// connect 注册为高阶组件
// 'react-redux' 仅有两个对外提供的API connect和 Provider
// Provider 提供的是一个顶层容器的作用 实现的是 store 的上下文的传递

// MyApp = connect(mapStateToProps, mapDispatchToProps)(MyApp);

// function mapStateToProps(state) {
//     return {
//         dataList: state.A.dataList,
//         myData: state.B.myData   A, B分别是不同的组件修改state产生的
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         myAppOnclick: () => dispatch(pressEventAction),
//         handleClickEvent: () => dispatch(getAppValue),
//         addTodo: () => dispatch(action)
//     }
// }

// export const addTodo = text => ({
//     type: types.ADD_TODO, 
//     text // payload 触发action.type 后操作中所带的 action.text
// })    

// header传入了一个参数action mapDispatchToProps 函数中怎么没有

// addTodo 这个值通过 mapDispatchToprops 传给了 Header 组件
// 所以在 Header 组件的this.props 中可以接收到

// 但是 没有dispatch 是怎么连接的呢 QQQQQQQQQQQQQ？？？？？？？？

// MyApp = connect(mapStateToProps, mapDispatchToProps)(MyApp);

export default connect( null, { addTodo })(Header)