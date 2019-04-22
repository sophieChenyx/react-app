import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'


// QQQQQQ: 这个文件 是怎么拿到state中的数据的 
const getTodos = state => state.todos

const getVisibilityFilter = state => state.visibilityFilter
// const getTodos = ( state, props ) => {
//     console.log('arguments>>>>>', state, props)
//     return state.todos
// }
// createSeletor 具有记忆功能 createSelector([fun1, fun2], fun3)
// createSeletor 创建的函数 selector(arguments) 被使用的时候传入的参数 可以在seletor 中进行多次处理
// createSelector([func1, func2], func3)
// 以上函数执行的过程是 
// (function(arguments) {
//     let state1 = func1(arguments)
//     let state2 = func2(arguments)
//     return func3(state1, state2)
// })(arguments)        // 传入的参数先被数组中的函数逐一处理 组成结果队列 被第二个函数作为参数返回给 调用 selector()  函数


// 获得已完成的数据 整理出对应的数据

export const getCompletedTodoCount = createSelector(
    [getTodos],
    todos => (
        todos.reduce((count, todo) => 
            todo.completed ? count + 1: count,
            0
        )
    )
)


export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case SHOW_ALL:
          return todos
        case SHOW_COMPLETED:
          return todos.filter(t => t.completed)
        case SHOW_ACTIVE:
          return todos.filter(t => !t.completed)
        default:
          throw new Error('Unknown filter: ' + visibilityFilter)
      }
    }
  )
  