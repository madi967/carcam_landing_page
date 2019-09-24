import React, { Component } from 'react';
import './App.css';
import Image_ from './components/Image_';
import { Gradient } from 'react-gradient';
import Texte from './components/Texte';
import  Login from './components/Login';
import Timer from './components/Timer_';
 
const gradients = [
    ['#00f', '#6600a1'],
    ['#00a','#660030'],
    ['#005', '#660030'],
    ['#00a','#660030'],
    ['#00f', '#6600a1'],
];
/*var sendmail = require('sendmail')();
 
sendmail((sender,receiver,texte)=>({
    from: sender,
    to: receiver,
    subject: 'carcam',
    html: texte,
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
}));*/
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nom:"",
      email:"",
      numero:"",
      sujet:"",
      commentaire:"",
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleSubmit(){
    alert("cool");
  }
  handleChange(event){
    if(event.target.name==="nom"){
      this.setState({
        nom:event.target.value,
      });
    }
    if(event.target.name==="email"){
      this.setState({
        email:event.target.value,
      });
    }
    if(event.target.name==="numero"){
      this.setState({
        numero:event.target.value,
      });
    }
    if(event.target.name==="sujet"){
      this.setState({
        sujet:event.target.value,
      });
    }
    if(event.target.name==="commentaire"){
      this.setState({
        commentaire:event.target.value,
      });
    }
      
  }
  render(){
    return (
      <div className="App">
        
        <Gradient
          gradients={ gradients } // required
          property="background"
          duration={ 3000 }
          angle="90deg"
        > 
        <header>
          <div>
            <nav>
              <div className="logo">Logo-carcam slogan:Une nouvelle vision de location de l'automobile au cameroun</div>
              <span>InfoLine:+237.697.103.538</span>
              <span><a href="#login">Contact Us</a></span>
            </nav>
          </div>
        </header>
        </Gradient>
        <body>
          <div className="image">
            <Image_/>
          </div>
          <div className="texte">
            <Texte/>
          </div>
          <Gradient
          gradients={ gradients } // required
          property="background"
          duration={ 300000 }
          angle="0deg"
           >
             <Timer/>
          </Gradient>
          <label id="login"></label>
          <Login  handleSubmit={this.handleSubmit} handleChange={this.handleChange} 
              nom={this.state.nom} email={this.state.email} numero={this.state.numero}
              sujet={this.state.sujet} commentaire={this.state.commentaire}/>
        
        </body>
        <footer>
          <div className="footer">
            <a href="https://www.uzenze.com" target="_blank">Copyright © 2019 | made by uzenze </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
