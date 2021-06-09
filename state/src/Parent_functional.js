import React from 'react'//for functional component
import Child_functional from './Child_functional'
function Parent_functional(){
    return <div>
            <h1>This is parent functional component</h1>
            <Child_functional country='Taiwan' sports='baseball'/>
        </div>
}

export default Parent_functional