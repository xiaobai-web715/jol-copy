import React from 'react'
//对于类组件来说,事件处理函数通常声明成class中方法
class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn : true
        }
    }
    // handleClick(){
    //     //当你想通过一个状态来修改另一个状态的时候,最好通过回调函数的形式
    //     this.setState((state) => {
    //         return{isToggleOn : !state.isToggleOn}
    //     })
    // }
    //当然还有一种方式,就是在类块当中直接写成箭头函数的形式(不过前提是你要开启class fields(可以手动编写一个babelrc文件【该文件与babel转译jsx语法有关】))
    handleClick = () => {
        this.setState((state) => {
            return{isToggleOn : !state.isToggleOn}
        })
    }
    render(){
        return(
            // 这里为什么要这样子写呢onClick={() => {this.handleClick()}}，为啥不直接写成onClick={this.handleClick}
            //截止到2022/7/9号的了解就是,react的合成事件中的函数类似于在原生的js里面先将函数赋值给一个变量,然后再执行一样，这个this会丢失指向,所以用箭头函数的话,箭头函数里面的this默认指向箭头函数定义的作用域链当中最近的一个this的指向
            // <button onClick={() => {this.handleClick()}}>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
export default Toggle