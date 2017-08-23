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
      year: 0,
      month: 0,
      day: 0,
      location: '',
      formSlice: 0,
    };

    this.buttonTexts = ['Continue!', 'Next', 'Done!'];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputName){
    return (e) => {
        this.setState({ [inputName]: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.formSlice === 2){
      this.props.signUp(this.state).then((res)=>{console.log(res);});
    }
    else {
      this.setState(merge({formSlice: this.state.formSlice++}, this.state));
    }
  }

  render(){
    const buttonText = this.buttonTexts[this.state.formSlice];

    return (
      <form id='signup-form'>
        <FormSlice
          slice={this.state.formSlice}
          handleChange={this.handleChange}
          currentState={this.state}
          />
        <button onClick={ this.handleSubmit }>{ buttonText }</button>
      </form>
    );

  }
}
