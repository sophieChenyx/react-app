
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


// 定义一个类型
class MyApp extends Component {
    render() {
        const { text, inner, myAppOnclick } = this.props;
        return(
            <div>
                我是myApp组件
                我有自己的button
                <h1>{inner}</h1>
                <h2>{text}</h2>
                <button onClick={myAppOnclick}>点击 文字发生改变</button>
            </div>
        )
    }
}

// 点击事件触发action reducer 返回修改后的state

// action 被放置在reducer 中做处理 action 通过 mapDispatchToProps 相连
const pressEventAction = {
    type: 'PRESS_EVENT'
}
const initState = {
    text: '初始值',
    inner: 'inner 初始值'
}
const reducer = (state= initState, action) => {
    switch(action.type) {
        case 'PRESS_EVENT':
            return {
                text: '我是myApp中的文字',
                inner: '我是inner from myApp'
            }
        default:
            return initState;
    }
}

function mapStateToProps(state) {
    return {
        text: state.text,
        inner: state.inner
    }
}
function mapDispatchToProps(dispatch) {
    return {
        myAppOnclick: () => dispatch(pressEventAction),
    }
}

let store = createStore(reducer)

MyApp = connect(mapStateToProps, mapDispatchToProps)(MyApp);


ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('root')
)
