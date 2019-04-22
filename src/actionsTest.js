const pressEventAction = {
    type: 'PRESS_EVENT'
}

const getAppValue = {
    type: "GET_APP_VALUE",
    payload: {
      prompt: "我是提醒的文字",
      params: {
        userId: 233,
        username: "小敏"
      }
    }
}

module.exports = {
    pressEventAction,
    getAppValue,
}