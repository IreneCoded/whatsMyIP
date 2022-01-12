import React from 'react';
import './App.css';
import Connection from "./components/conectip";
import Chained from './components/connectall';
import MyClock from './components/clock';



function App() {


  return (
    <div className="App">

      <Connection className="myIp"/>
     

      <MyClock className="center"/> <Chained className="Mapper"/>

           
         

           
    </div>
  );

 
}

export default App;

