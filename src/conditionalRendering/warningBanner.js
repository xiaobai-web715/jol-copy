import React , {useEffect} from 'react'

const WarningBanner = (props) => {
    useEffect(() => {
        console.log('虽然组件返回的是null,但是生命周期并不会受到影响！')
    } , [props.warn])//前提就是你的useEffect要写在return的前面
    if(!props.warn){
        return null
    }
    return (
        <div className='warning'>Warning!</div>
    )
}

export default WarningBanner