import React,{Component} from 'react'
class Child extends React.Component{
    constructor(props){//Child receiving value from Parent from Props
        super(props)
    }
    
    render(){
        return <div>
            <h1>This is child component</h1>
            <h2>This is props from Parent in Child: language {this.props.language} framework {this.props.framework}</h2>
        </div>
    }
}
export default Child