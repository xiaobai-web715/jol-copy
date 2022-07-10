import React from 'react'
//接受一个celsius温度作为一个prop,并据此打印出温度是否足以将水煮沸
const BoilingVerdict = (props) => {
    if(props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

export default BoilingVerdict