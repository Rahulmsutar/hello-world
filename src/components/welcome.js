import React , {Component} from 'react'
class Welcome extends Component{
  
  constructor(){
    super()
    this.state = {
        message: ' '
    }
}
    response(){
      this.setState({
        message:'yes both are single'
        
      })
    }

    render(){
      const {name,status}=this.props
      return(
        <div>
          <h1>
            hello {name} are you {status}
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.response()}>Answer</button>
          </h1>
          </div>
        )
      }
}
export default Welcome;
