//react元素的事件处理和DOM元素的很相似，但是有一点语法上的不同
//1.React事件的命名采用小驼峰式(onClick)，而不是纯小写(onclick)
//2.使用JSX语法时你需要传入一个函数作为事件处理函数(也就是要写成{函数名}),而不是一个字符串
//3.在React中你不能通过返回false的方式阻止默认行为。必须显示的调用preventDefault
import React , {useState} from 'react'
import useCallbackState1  from '../utils/synchroState'
import axios from 'axios'
import Toggle from './toggle'
const indiex = () => {
    const [index , setIndex] = useCallbackState1(0)
    const [disabled , setDisabled] = useState(false)
    const [value , setValue] = useState('')
    const activateLasers = () => {
        alert('react中的事件处理')
    }
    //对form表单进行序列化操作
    const serialize = (target) => {
        // console.log(target.elements)
        let parts = []
        for(let field of target.elements){
            switch(field){
                // 不包含type属性的字段会在这里被序列化
                default:
                    if(field.name.length){
                        parts.push(`${encodeURIComponent(field.name)}=` + `${encodeURIComponent(field.value)}`)
                    }
            }

        }
        return parts.join('&')
    }
    //发起请求
    const request = async(target) => {
        await axios.get('http://localhost:4000/sockjs-node/info?t=1657338053718' , {
            data : serialize(target)
        }).then((res) => {
            if(res.status === 200){
                setDisabled(false)
            }
        }).catch((err) => {
            console.log('请求报错:' , err)
        })
        console.log('我是后打印的,因为我的前面有await')
    }
    const handleSubmit = (e) => {
        //对于react中的事件处理来说,是一个合成事件,因此不需要考虑浏览器的兼容性问题
        //并且也并不需要像传统的js代码一样需要给已经创建的DOM绑定addEventListener(只需要在初始渲染元素的时候添加监听器即可)
        e.preventDefault()
        //阻止表单的默认提交行为
        // console.log('表单序列化' , serialize(e.target))
        request(e.target)
        console.log('我是先打印的,因为前面的打印被await影响到了')
        setIndex((val) => {return ++val} , (data) => {
            console.log(data)
        })
        setDisabled(true) //当网络较慢的时候禁止用户多次提交
    }
  return (
    <>
        <button onClick = {activateLasers}>Active Lasers</button>
        {/* 传统html事件处理的写法
        <button onclick = 'activateLasers()'>Active Lasers</button> */}
        <form onSubmit={handleSubmit}>
            {/* JS教程582页,当表单中存在type='submit/image'属性的input或者button按钮时,当触发提交的时候，会在向服务器发送某个请求之前触发submit事件(也就是在这个时候可以做表单校验或者阻止表单的默认行为) */}
            {/* 不过这样子的提交方式返回值并不会很好的进行处理 */}
            {/* <button type='submit' disabled={disabled}>Submit</button> */}
            {/* 可以使用表单序列化的方式不过要结合这ajax来进行请求(可以使用一些库,像axios，fetch) */}
            <input value={value} name='你说啥名字好呢' onChange={(e) =>{setValue(e.target.value)}}></input>
            <button type='submit' disabled={disabled}>Submit</button>
        </form>
        <Toggle/>
    </>
  )
}

export default indiex