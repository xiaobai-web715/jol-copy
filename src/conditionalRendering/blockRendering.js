//有的时候你可能会想阻止组件的渲染
import React from "react";
import WarningBanner from "./warningBanner";
class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showWaring : true
        }
    }
    handleToggleClick = () => {
        this.setState((state) => {
            return {showWaring : !state.showWaring}
        })
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWaring}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWaring ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
export default Page