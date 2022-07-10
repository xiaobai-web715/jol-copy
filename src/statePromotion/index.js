//React中的状态提升(通过计算水在给定温度下是否会沸腾)
// import React , {useState} from 'react'
// import BoilingVerdict from "./BoilingVerdict";

// const Calculator = () => {
//     const [temperature , setTemperature] = useState('')
//     const handleChange = (e) => {
//         setTemperature(e.target.value)
//     }
//     return(
//         <fieldset>
//             <legend>Enter temperature in Celsius:</legend>
//             <input value={temperature} onChange={handleChange}></input>
//             <BoilingVerdict celsius={parseInt(temperature)}/>
//         </fieldset>
//     )
// }
// export default Calculator
//现在我们有一个新的想法就是我不仅可以输入摄氏度也可以输入华氏度，并保持两个输入框的数据同步
//1.我们可以将输入组件进行抽离(根据传入的值内部去处理是摄氏度转华氏度,还是华氏度转摄氏度)
//2.我们的输入组件以及水是否会沸腾的组件都需要依靠输入的温度的状态(但这个状态是输入组件内部的值)
//3.这个时候就可以使用状态提升来实现(也就是子组件传给父组件值)
import React , {useCallback, useEffect, useState , useRef} from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'
const Calculator = () => {
    const [temperature , setTemperature] = useState('')
    const [scale , setScale] = useState('c')
    //温度转换方法
    function toCelsius(fahrenheit){
        return (fahrenheit - 32) * 5 / 9
    }
    function toFahrenheit(celsius){
        return (celsius*9/5) + 32
    }
    function tryConvert(temperature , callback){
        const input = parseInt(temperature)
        if(Number.isNaN(input)){
            return ''
        }
        const output = callback(input)
        const rounded = Math.round(output*1000)/1000
        return rounded.toString()
    }
    const onTemperatureChange = useCallback((value , type) => {
        //回调函数返回两个值,一个是对应组件的onChange的value值,以及对应的温度标识
        setTemperature(value)
        setScale(type)
        //修改状态之后触发组件的更新(将需要修改的DOM节点进行修改)
        //基于callback对温度进行另一种类型的转换
    } , [])
    return (
        <fieldset>
            {/* 传入温度,回调函数,以及温度对应的标志 */}
            <TemperatureInput temperature={scale === 'c' ? temperature : tryConvert(temperature , toCelsius)} onTemperatureChange = {onTemperatureChange} scale='c'/>
            <TemperatureInput temperature={scale === 'f' ? temperature : tryConvert(temperature , toFahrenheit)} onTemperatureChange = {onTemperatureChange} scale='f'/>
            <BoilingVerdict celsius={parseInt(temperature)}/>
        </fieldset>
    )
}

export default Calculator