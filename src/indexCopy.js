
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, Connect } from 'react-redux';
import { stat } from 'fs';
import { connect } from 'tls';


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
    </Provider>
)


import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import myApp from './indexCopy';
// import { ReactComponent } from '*.svg';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



// 定义组件部分
class App extends Component {

    handleDataFlow() {

    }

    render() {
        const { text, onChangeText, onButtonClick, constantValue, inner='inner text' } = this.props;
        return(
            <div>
                <span> there is some function about react connect redux</span>
                <h1 onClick={onChangeText}> {text} </h1>
                <button onClick={onButtonClick}> click me</button>
                <button onClick={constantValue}> constantValue {text}</button>
                <h3>{inner}</h3>
            </div>
        );
    }
} 


// action  触发了 action以后 reducer 就去处理这些东西 
const changeTextAction = {
    type: 'CHANGE_TEXT'
}
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}
const showOffaction = {
    type: 'SHOWOFF_ACTION'
}



// reducer 
const initialState = {
    text: 'Hello Everyone'
}

// reducer 主要是管理 action和 管理state action 在props 里 state 也咋样props 里面？
// 这里是最后一步 执行完了 reducer 之后的返回值 

// reducer 根据action 的不同去处理 state 也是在reducer 中处理了以后 在有一个属性就是
// mapStateToProps 将state放在 props 中 => reducer 返回的对象都中的值都在 state 中

const reducer = (state = initialState, action) => {
    console.log('state',state)
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text === 'Hello'? 'hello world': 'Hello',
                inner: 'I am in state Object Change _text'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'I had been clicked the button',
                inner: 'I am BUTTON_CLICK'
            }
        case 'SHOWOFF_ACTION':
            return {
                text: 'i am from the action named "SHOWOFF_ACTION"',
                inner: 'I am SHOWOFF_ACTION'
            }
        default:
            return initialState
    }
}



// store 
let store = createStore(reducer);

// 映射redux state 到组件的属性 state 中的值发生了改变就会重新渲染

// 经过 reducer 的操作决定了 state 中所有暴露给 props 的只有 state.text

function mapStateToProps(state) {
    return {
        text: state.text,
        inner: state.inner
    }
}

// 映射redux actions 到组件的属性 dispatch (action) 触发 reducer 返回相应的值 
// 注册到store store进行纷发 connect 链接连个函数 
// 可以将 props和state 与组件连接起来


// 执行动作触发函数 将这两个函数单独封装起来  APP 如果需要使用就将他单独分装起来 
// 所以最后单独封装的都是action  dispatch 中的函数 返回的都是执行函数 dispatch action 
// // action  props mapDispatchToProps(dispatch) 返回对象 然后执行 dispatch 动作连接 再触发reducer
// reducer 有return 的值
// const changeTextAction = {
//     type: 'CHANGE_TEXT'
// }
// const buttonClickAction = {
//     type: 'BUTTON_CLICK'
// }


// 注入到props 中的一个是 mapDispatchToProps 中的返回值
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: ()=> dispatch(changeTextAction),
        constantValue: () => dispatch(showOffaction),
    }
}

// 连接组件 connect 将state 和 props 连接起来

App = connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(
    <Provider store={store}>
        <App />
        <myApp />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
