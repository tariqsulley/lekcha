import React, {Component} from "react"

class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={this.props.changeValue}> Back</button>
            </div>
        )
    }
}

export default HomePage