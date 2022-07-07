import React from 'react'
import ReactDOM from 'react-dom'
// react的jsx模板(允许在html元素当中以{}的形式嵌入任何的js表达式)
// const name = '刘兴华'
// const element = <h1>Hello world , 我叫{name}</h1>
// const formatName = (user) => {
//     return user.firstName + ' ' + user.lastName
// }
// function getGreeting(user){
//     if(user){
//         return <h1>Hello , {formatName(user)}</h1>
//     }else{
//         return <h1>Hello , Stranger.</h1> //在jsx表达式当中，你可以将属性指定为字符串字面量
//                                           //也可以使用{}将js表达式作为属性值进行插入
//                                           //因为jsx语法更接近js，所以属性命名的形式采用小驼峰式命名
//                                           //在jsx语法下,如果一个标签里面没有内容,则可以直接写成这样<img/>
//                                           //jsx能够有效防止注入攻击,React DOM在渲染内容之前默认会进行转义，会将所有内容转义成字符串，这样就可以有效的防止XSS攻击
                                             //jsx会将以小写字母开头的组件视为原生DOM标签(但本质也是转译成React.createElement()的方式),将大写开头的组件视为自定义组件
//                                           //babel会讲JSX转义成React.createElement()函数进行调用
//                                           //<h1>Hello , Stranger.</h1> 会被转义成
//                                           //React.createElement('h1' , null , 'Hello , Stranger.')
//     }
// }
// const user = {
//     firstName : 'Harper',
//     lastName : 'Perez'
// }
// const element = <h1>Hello , {formatName(user)}</h1> //jsx也是一个表达式，也就是你可以在js任何地方将其写入
// ReactDOM.render(
//     <>
//         {getGreeting(user)}
//         <UI/>
//     </>,
//     document.getElementById('root')
// )

//React元素描述了你在屏幕上想看到的内容,但是对于React元素来说,就像是某一个时间节点上的快照,一旦创建你就无法修改它，截止到react官网现有的知识,更新UI的方式就是创建一个全新的元素
// function tick(){
//     const element = (
//         <div>
//             <h1>Hello , world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
//     ReactDOM.render(element , document.getElementById('root')) //但是在实践当中ReactDOM.render()只会调用一次,这也就引出了后面的有状态组件
// }
// setInterval(tick , 1000)

import App from './reactZuJian/index'
ReactDOM.render(
    <App name='Sara'/>,
    document.getElementById('root')
)