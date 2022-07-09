import React , {useState , useEffect , useRef} from 'react'
//react hook中默认将setState(class组件)的第二个参数(也就是回调函数)进行了移除,但是我们需要同步获取到state的值

const synchroState = (state) => {
    const [data , setData] = useState(state)
    //useState是返回了一个数组,数组的第一个值是变量值,第二个值是一个函数
    //因此我们可以在这个回调函数中做处理,让他能够去接收一个回调函数
    const targetCallBack = useRef()
    let callBack = null //记住不能有变量的形式来保存这个callback,因为state变化的时候该变量会重新进行赋值变成null
    useEffect(() => {
        targetCallBack.current && targetCallBack.current(data) //只有当callBack是有函数值的时候才能触发回调函数去更新
        // callBack && callBack(data)
    } , [data])
    return [data , function(val , callback){
        targetCallBack.current = callback
        // callBack = callback
        setData(val)
    }]
}

export default synchroState