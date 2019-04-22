import { stat } from "fs";



const initState = {
    text: '初始值',
    inner: 'inner 初始值',
    value: 'value初始值'
}

const reducer = (state= initState, action) => {
    switch(action.type) {
        case 'PRESS_EVENT':
            return {
                text: '我是myApp中的文字',
                inner: '我是inner from myApp'
            }
        case "GET_APP_VALUE":
            const { prompt, params } = action.payload;
            let mathNum = Math.random();
            return {
              value: prompt + params.userId + params.username + mathNum
            }     
        default:
            return initState;
    }
}

// function todoApp(state= initState, action) {
//     return {
//         reducer: reducer(state.)
//     }
// }

export default reducer;
