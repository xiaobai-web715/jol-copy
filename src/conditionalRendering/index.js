import React , {useState , useCallback} from 'react'
import Greeting from './Greeting'
import Page from './blockRendering'
const LoginButton = (props) => {
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
const LogoutButton = (props) => {
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

const index = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const handleLoginClick = useCallback(() => {
        setIsLoggedIn(true)
    } , [])
    const handleLogoutClick = useCallback(() => {
        setIsLoggedIn(false)
    } , [])
    // let button = null
    // if(isLoggedIn){
    //     button = <LogoutButton onClick={handleLogoutClick}/>
    // }else{
    //     button = <LoginButton onClick={handleLoginClick}/>
    // }
    return (
        <>
            <Greeting/>
            {/* {button} */}
            {/* 当然也可以使用三目运算符 */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick}></LogoutButton> : <LoginButton onClick={handleLoginClick}></LoginButton>}
            <Page/>
        </>
    )
}

export default index