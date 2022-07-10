// 在React里,HTML表单元素的工作方式和其他DOM元素有些不同，这是因为表单元素通常会保持一些内部的state
//在JSX中,表单元素(input、testarea等)通常自己维护state,并根据用户的输入进行更新。(React以这种方式控制取值的表单输入元素加做受控组件)
import React from 'react'
import Merge from './merge'
import StatePromotion from '../statePromotion/index'
class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : '',
            textareaValue : '请撰写一篇关于你喜欢的 DOM 元素的文章.',
            selectValue : 'coconut',
            selectValues : ['A']
        }
    }
    handleChange = (e) => {
        this.setState({value : e.target.value})
    }
    handleTextareaChange = (e) => {
        this.setState({textareaValue : e.target.value})
    }
    handleSelectValue = (e) => {
        this.setState({selectValue : e.target.value})
    }
    // 多选框添加选项并去重
    pushAndDuplicateRemoval(value){
        let list = [...this.state.selectValues]
        list.push(value)
        return list.filter((item , index) => {
            return index === list.indexOf(item)
        })
    }
    handleSelectsValue = (e) => {
        let result = this.pushAndDuplicateRemoval(e.target.value)
        this.setState({selectValues : result} , () => {
            console.log(this.state.selectValues)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        alert(`提交的名字:${this.state.value} , ${this.state.textareaValue} , ${this.state.selectValue} , ${this.state.selectValues.valueOf()}`)
    }
    render(){
        return(
            <>
                <form  onSubmit={this.handleSubmit}>
                    <label>
                        名字:
                        {/* 每次按键时onChange都会去执行,React的state被更新然后再渲染更新 */}
                        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                        {/* 传统HTML中的textarea用子元素定义文本,但React使用value来替代,这样可以使得其余input类似 */}
                        <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange}></textarea>
                        {/* 传统HTML的select在其子元素(option)中使用selected来确定默认选项,但是React中也是使用value来进行选择 */}
                        <select value={this.state.selectValue} onChange = {this.handleSelectValue}>
                            <option value='grapefruit'>葡萄柚</option>
                            <option value='lime'>酸橙</option>
                            <option value='coconut'>椰子</option>
                            <option value='mango'>芒果</option>
                        </select>
                        <select multiple={true} value={this.state.selectValues} onChange = {this.handleSelectsValue}>
                            <option value='A'>肖生克的救赎</option>
                            <option value='B'>阿甘正传</option>
                            <option value='C'>当幸福来敲门</option>
                            <option value='D'>灵魂之旅</option>
                        </select>
                    </label>
                    <input type='submit' value='提交'></input>
                    {/* 像上述的写法就会给你一个警告(要么写成受控组件,要么用defaultValue或者read-only) */}
                </form>
                <Merge/>
                <StatePromotion/>
            </>
        )
    }
}
export default Index