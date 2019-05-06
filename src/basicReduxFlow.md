```

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// eslint-disable-next-line
import { Provider, connect} from 'react-redux'
import Button from 'antd/lib/button';

// eslint-disable-next-line
// 定义组件
let App = (props) => {
    const { text, onChangeText, onButtonClick } = props
    return (
        <div>
            <Button onClick={onChangeText}>文字点击事件</Button>
            <Button onClick={onButtonClick}>按钮点击事件</Button>
            字体：：：{text}
        </div>
    )
}

// define action 1
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}
const changeTextAction = {
    type: 'CHANGE_TEXT'
}

// define reducer
// init state
const initialState = {
    text: 'initial Word ===='
}

// define reducer deal action in store
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUTTON_CLICK':
            return {
                text: state.text === "initial Word"? 'BUTTON_CLICK':'always initial Word'
            }
        case 'CHANGE_TEXT':
            return {
                text: "initial Word"
            }
        default:
            return initialState
    }
}
// 3 reducer && store connect ，sign for store 

let store = createStore(reducer)

// dispatch action  触发 actions 的行为 由组件的props 收入  1
// diapatch 中的值为对象 放到reducer 种进行处理 2
// reducer 返回state 值 reducer 和组件注册 3

function mapDispatchToProps(dispatch) {
    return {
        onChangeText: () => dispatch(changeTextAction),
        onButtonClick: () => dispatch(buttonClickAction)
    }
}
// 将state 返回到组件里
function mapStateToProps(state) {
    return {
        text: state.text
    }
}
// 组件定义好后组件要和对应的 redux 挂钩链接 完成 组件 => dispatch(action) => reducer => store => (state) => 组件
// eslint-disable-next-line
App = connect(mapStateToProps, mapDispatchToProps)(App)


// 渲染组件
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
```