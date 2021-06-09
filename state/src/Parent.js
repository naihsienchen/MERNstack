import React,{Component} from 'react'//for state component
import Child from './Child'
class Parent extends React.Component{
    constructor(props){//getting value from App.js parent component
        super(props)
      }
    
    render(){
        return <div>
            <h1>This is parent component</h1>
            <h2>This is passed down from App.js: movies {this.props.movie}</h2>
            <Child language='Javascript' framework='React'/>//Parent passing value to Child
        </div>
    }
}

export default Parent