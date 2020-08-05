import React, { Component } from 'react';
import './App.css';
import Register_page from './components/Register_page';


class App extends React.Component
  {
    render()
    {
       return (
           <div className="container">
              <Register_page />
           </div>     
      ) ;
       
    }
  }



export default App;
