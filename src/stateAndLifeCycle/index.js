import React from "react";
//16.8版本之前react函数式组件并没有声明周期
// const Clock = (props) => {
//     return(
//         <div>
//             <h1>Hello , world!</h1>
//             <h2>It is{props.date.toLocaleTimeString()} </h2>
//         </div>
//     )
// }
import EventProcessing from '../eventProcessing/index'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date : new Date()
        }
        //如何正确的使用state
            //1.不要直接修改state（this.state.date = new Date）,这样并不会重新渲染组件,必须使用setState方式(在类函数组件当中),当然函数组件也有对应的钩子函数
    }
    //接下来要设置一个计时器来对state的状态进行修改来触发UI组件的更新
    //而组件在卸载的时候释放占用的资源是非常重要的
    //当第一次渲染组件时,加入定时器叫做挂载
    //当组件卸载的时候清除定时器被称为卸载
    componentDidMount(){
        this.timerID = setInterval(
            // function(){
            //     this.tick()
            // } //非箭头函数的形式是会报错的,因为this并没有指向类块
            () => {
                this.tick() //因为箭头函数是在类块中定义的,所以this默认指向类块
            } 
        , 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    //定时器触发state更新的函数
    tick(){
        //处于性能的考虑,react可能会把多次setState()的调用合并成一个调用(目的就是防止多个setState导致UI的多次更新,合并成一个之后,一次更新多个state只会触发一次UI的更新)
        //this.setState({counter : this.state.counter + this.props.increment})这样的写法并不能成功更新计数器,要解决这样的一个问题可以在里面传入一个函数而非对象this.setState((state , props) => {
            // return{counter : state.counter+props.increment}
        // })箭头函数也是非必须的
        //this.setState({date : new Date()})是浅合并,并不会影响到内部的其他状态
        //state除了拥有并设置它的组件,其他组件都无法访问,当然你可以将state中的状态传给子组件,但是子组件并不会关心传入的数据是来自父组件的props,还是state，还是其它的。
        this.setState({
            date : new Date()
        })
    }
    render(){
        return(
            <div>
                <h1>Hello , world!</h1>
                {/* 如果你把props想象成单项的河流的话,state就是当地汇入当前河流的分支(无法做到回流) */}
                <h2>It is{this.state.date.toLocaleTimeString()} </h2>
                <EventProcessing/>
            </div>
        )
    }
}
export default Clock