import React from "react"

// function Greet(){
//     return <h1>hello rahul</h1>
// }

const Greet = (props) =>
{
    const {name,status}=props
return(
<div>
    <h1>
        Hello {name} are you {status}
    </h1>
</div>
)
}

export default Greet