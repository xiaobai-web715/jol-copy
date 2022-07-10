import React from 'react'
import Form from '../form/index'
//react的jsx中转换列表
const Index = () => {
    const number = [1 , 2 , 3 , 4 , 5]
    return (
        <>
            <ul>
                {number.map((item) => {
                    // key用于识别React中的哪些元素改变了,比如被添加或删除
                    // key在这个元素列表当中应当是独一无二的
                    // index(也就是数组的索引)是万不得已情况下的选择
                    //map中用来遍历产生的元素或组件是必须要key的(组件不需要你将key传进去给内部,直接给自定义组件一个key值就ok)
                    //key只需要是在当前map遍历产生的组件之间是唯一的即可(其余的map里面的key与这个一不一样不影响)
                    //key属性会将信息传递给React,但并不会将该属性传递给组件内部(也就是props里面没有key属性),如果你要将key当做值进行传递,可以用另一个属性名称来进行代替
                    return <li key={item.toString()}>{item}</li>
                })}
            </ul>
            <Form/>
        </>
    )
}

export default Index