
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';
// import App from './App';
// import reducer from './reducer';
// import { pressEventAction,  getAppValue} from './actions';
// import Button from 'antd/lib/button';
// // import { Router, Route } from 'react-router';

// // 定义一个类型 
// class MyApp extends Component {
//     render() {
//         const { text, inner, myAppOnclick, value, handleClickEvent } = this.props;
//         return(
//             <div>
//                 我是my
//                 我有自己的button
//                 <h1>{inner}</h1>
//                 <h2>{text}</h2>
//                 {/* <li><Link to="/link">IndexBox</Link></li> */}
//                 {/* <li><Link to="/about">IndexBox</Link></li> */}
//                 <button onClick={myAppOnclick}>点击 文字发生改变</button>
//                 <App text={value} handleClickEvent={handleClickEvent}/>
//                 {this.props.children}
//             </div>
//         )
//     }
// }


// // 当前组件可被注册 返回的state中的数字
// function mapStateToProps(state) {
//     return {
//         value: state.value,
//         text: state.text,
//         inner: state.inner
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         myAppOnclick: () => dispatch(pressEventAction),
//         handleClickEvent: () => dispatch(getAppValue),
//     }
// }

// MyApp = connect(mapStateToProps, mapDispatchToProps)(MyApp);

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css'

let store = createStore(reducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
