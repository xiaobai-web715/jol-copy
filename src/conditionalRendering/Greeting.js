//react官方文档条件渲染(与js中一样是通过if条件进行判断)
import React from 'react'
const UserGreeting = () => {
    return <h1>Welcome Back!</h1>
}
const GuestGreeting = () => {
    return <h1>Please sign up.</h1>
}
const Index = (props) => {
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return(
        <UserGreeting/>
    )
  }else{
    return(
        <GuestGreeting/>
    )
  }
}

export default Index