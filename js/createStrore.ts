interface storeResult{
    getState:Function,
    dispatch:Function,
    subscribe:Function
}
function createStore(reducer :Function):storeResult{
    let state = null;
    // 返回数据
    const getState = () => state;
    // 保存使所有的订阅者
    const listeners:Array<Function> = [];
    // 订阅数据
    const subscribe = (listener:Function) => listeners.push(listener);
    // 派发操作数据方法
    const dispatch = (action) => {
        state = reducer(state,action);//覆盖源对象
        listeners.forEach(listener => listener());
    }
    // 初始化dispatch
    dispatch({});
    return {getState,dispatch,subscribe};
}

export default createStore;