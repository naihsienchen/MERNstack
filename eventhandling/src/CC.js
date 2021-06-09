import React,{Component} from 'react'
class CC extends React.Component{
    onClickEvent=()=>{
        alert('you clicked me from Class Component!')
      }    
      onChangeEvent=()=>{
        alert('you changed me from Class Component!')
      }    
      onHoverEvent=()=>{
        alert('you hovered me from Class Component!')
      }    
    
    render(){

        return<div>
            <h1>Event handling from Class Component</h1>
                <button onClick={this.onClickEvent}>This is on click event from CC</button>
                <input type='text' onChange={this.onChangeEvent} />
                <h2 onMouseOver={this.onHoverEvent}>This is on mouse hover event from CC</h2>
        </div>

    }

}
export default CC