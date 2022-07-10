import React from 'react'

const TemperatureInput = (props) => {
    return(
        <>
            <label>
                请输入{props.scale === 'c' ? '摄氏' : '华式'}度:
                {/* 这里记得对传入的值做一下校验(如果传入的是undefiend会有一个警告) */}
                <input value={props.temperature ? props.temperature : ''} onChange={(e) => {props.onTemperatureChange(e.target.value , props.scale)}}></input>
            </label>
            <br/>
        </>
    )
}
export default TemperatureInput