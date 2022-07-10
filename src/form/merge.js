//当然在处理多表单组件的时候你可以只写一个事件监听函数
//通过事件监听函数内部进行判断该做怎样的处理
import React from 'react'
class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isGoing : true,
            numberOfGuests : 2,
            selectValue : 'GTA5'
        }
    }
    handleChange = (e) => {
        switch(e.target.type){
            case 'file':
                let file = e.target.files[0]
                alert(`${file.name} , ${file.size} , ${file.type}`)
                break;
            case 'checkbox':
                this.setState({[e.target.name] : e.target.checked})
                break; //break记得跳出,要不你试一下关闭这个break,default部分还是会在点击checkbox的时候去执行
            default:
                console.log(e)
                this.setState({[e.target.name] : e.target.value} , () => {
                    // 这个回调函数是没有传参的(不过可以通过this.state直接访问到最新的state)
                    console.log(this.state[e.target.name])
                })
        }
    }
    render(){
        return(
            <>
                <form>
                    <label>
                        参与:
                        <input name='isGoing' type='checkbox' checked={this.state.isGoing} onChange={this.handleChange}></input>
                    </label>
                    <select name='selectValue' value={this.state.selectValue} onChange={this.handleChange}>
                        <option value='GTA5'>GTA5</option>
                        <option value='凯纳精神之桥'>凯纳精神之桥</option>
                        <option value='荒野大镖客'>荒野大镖客</option>
                    </select>
                    {/* 与input的file相关的可以参考https://developer.mozilla.org/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications */}
                    <input type='file' onChange={this.handleChange}></input>
                    <label>
                        来宾人数:
                        <input name='numberOfGuests' value={this.state.numberOfGuests} onChange={this.handleChange}></input>
                    </label>
                    <input value='hi'></input>
                </form>
            </>
        )
    }
}
export default Reservation