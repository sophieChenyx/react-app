
// 又把这个部分需要和 state 做交互的绑定在了一起了
// QAQ 头好晕 好晕 
// 点击操作有交互的 都在 container 组件里面 与state connect 
// 捆绑 action 触发动作 


import { connect } from 'react-redux'
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";


// 点击的传来的值 等于什么 active 就是返回哪些去渲染
// active 返回到props 里面了

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.VisibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setFilter: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})
// 这里执行的是 footer 上的切换状态的操作
// export 高阶组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)