import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/welcome';
import Hello from './components/hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';





class App extends  Component {
  render() {
  return (
    <div className="App">
         {/* <Greet name="rahul" status="single"></Greet>
         <Welcome name="kishu" status="single"></Welcome>  */}
       {/* <Greet name="paddya"></Greet>
       <Greet name="raja"></Greet>
            <Hello />  
       <Message /> 
      <Message />  
      <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
      
      
      
      
    </div>
    );
  }
}

export default App;
