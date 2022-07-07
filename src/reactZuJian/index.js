//react组件从概念上来说就是js函数，包含两种函数组件和类组件
//组件可以接收一个入参即props
import React from "react"
//react类组件的写法(es6增加的class)
// class Welcome extends React.Component{
//     render(){
//         return (
//             <h1>Hello , {this.props.name}</h1>
//         )
//     }
// }
//react函数式组件的写法
const Welcome = (props) => {
    return (
        <h1>Hello , {props.name}</h1>
    )
}
//react的组合组件(也就是在该组件当中因为别的组件)
class App extends React.Component{
    render(){
        return(
            <>
                <Welcome name={this.props.name}/>
                <Welcome name='刘兴华'/>
                <Welcome name='你说啥名字好呢'/>
            </>
        )
    }
}
//无论是函数组件还是类组件,都规定纯函数理念,输入不变的情况下输出也不变,且内部不会对外部产生副作用
export default App