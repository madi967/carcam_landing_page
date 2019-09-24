import React,{Component} from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';


{/*
const sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  silent: false,
  dkim: { // Default: False
    privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
    keySelector: 'mydomainkey'
  },
  devPort: 1025, // Default: False
  devHost: 'localhost', // Default: localhost
  smtpPort: 2525, // Default: 25
  smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
});
*/}


export default class Login extends Component {

    render(){
    return (
        <div className="login">
          <ValidatorForm
            ref="form"
            onSubmit={this.props.handleSubmit}
           >
            <TextValidator
                onChange={this.props.handleChange}
                name="nom"
                value={this.props.nom}
                validators={['required', 'required']}
                errorMessages={['this field is required', ' ']}
                placeholder="Nom complet"
            />
            <TextValidator
                onChange={this.props.handleChange}
                name="email"
                value={this.props.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                placeholder="Email"
            />
            <TextValidator
                onChange={this.props.handleChange}
                name="numero"
                value={this.props.numero}
                validators={['required', 'isNumber']}
                errorMessages={['this field is required', 'number is not valid']}
                placeholder="Numéro de téléphone"
            />
          <button type="submit">Envoyer</button>
        </ValidatorForm>
        </div>
    );
    }
  }
 