import React from 'react';
import { merge } from 'lodash';
import FormSlice from './signup_form_slice';

export default class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      orientation: 'Straight',
      gender: 'Woman',
      zipcode: '',
      birthdate: '',
      year: '2009',
      month: '1',
      day: '1',
      formSlice: 0,
    };

    this.buttonTexts = ['Continue', 'Next', 'Done!'];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputName){
    return (e) => {
        this.setState({ [inputName]: e.currentTarget.value});
    };
  }

  checkErrors(){
    switch (this.state.formSlice) {
      case 0:
        return true;
      case 1:
        if((this.state.email) && Boolean(this.state.zipcode)){
          this.props.addError({emptyFields: ''});
          return true;
        }else {
          this.props.addError({emptyFields: 'please fill all fields'});
          return false;
        }
      default:
        return true;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.checkErrors()){
      if(this.state.formSlice === 2){
        this.setState({birthdate: (this.state.day + '-' +
                                  this.state.month + '-' +
                                  this.state.year)},
                      () => this.props.signUp(this.state).then(null));
      }
      else {
        this.setState(merge({formSlice: this.state.formSlice++}, this.state));
      }
    }
  }

  render(){
    const buttonText = this.buttonTexts[this.state.formSlice];

    let errors = [];
    errors = errors
            .concat(this.props.userCreationErrors.server)
            .concat( this.props.userCreationErrors.emptyFields)
            .map((err, idx) => <li key={idx}>{err}</li>);

    return (
      <div id='signup-form-container'>
        <form id='signup-form'>
          <FormSlice
            slice={this.state.formSlice}
            handleChange={this.handleChange}
            currentState={this.state}
            />
          <button onClick={ this.handleSubmit }>{ buttonText }</button>
        </form>
        <div className='errors'>
          {  errors }
        </div>
      </div>
    );

  }
}
