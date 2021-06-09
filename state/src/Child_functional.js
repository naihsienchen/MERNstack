import React from 'react'//for functional component

function Child_functional(props){
    return <div>
            <h1>This is child functional component</h1>
            <h1>Country passed from Parent_F: {props.country}</h1>
            <h1>Sports passed from Parent_F: {props.sports}</h1>
        </div>
}

export default Child_functional