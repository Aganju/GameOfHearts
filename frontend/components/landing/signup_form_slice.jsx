import React from 'react';

const SignupForm = ({slice, handleChange, currentState}) => {

  const optionCreator = (options) => {
    return options.map((option) => {
        return <option value={option}>{option}</option>;
      });
    };

    const yearOptions = [];
    for(let i = 2009; i >= 1918 ; i--){
        yearOptions.push(<option key={i} value={i}>{i}</option>);
    }

    const dayOptions = [];
    for(let i = 1; i <= 31 ; i++){
        dayOptions.push(<option key={i} value={i}>{i}</option>);
    }


  switch (slice) {
    case 0:
      return(
        <div id='form-slice1'>
          You are a <br/>
          <select
            value ={ currentState.orientation }
            className='input-form select'
            onChange={handleChange('orientation')}
          >
            { optionCreator(['Straight', 'Gay',
               'Bisexual', 'Other']) }
          </select>
          <select
            value ={ currentState.gender }
            className='input-form select'
            onChange={handleChange('gender')}
          >
            { optionCreator(['Female', 'Male', 'Other']) }
          </select>
        </div>
      );
    case 1:
      return(
        <div id='form-slice2'>
          <select
            value ={ currentState.month }
            className='input-form select'
            onChange={handleChange('month')}
          >
            { optionCreator(['January', 'February', 'March', 'April',
            'May', 'July', 'August', 'September', 'October', 'November',
            'December']) }
          </select>
          <select
            value={ currentState.day }
            className='input-form select'
            onChange={handleChange('day')}
          >
            { dayOptions }
          </select>
          <select
            value ={ currentState.year }
            className='input-form select'
            onChange={handleChange('year')}
          >
            { yearOptions }
          </select>
          <input
            type='text'
            onChange = { handleChange('location') }
            value={ currentState.location }
          />
          <input
            type='text'
            onChange = { handleChange('email') }
            value={ currentState.email }
          />
        </div>
      );
    case 2:
      return (
        <div>
          <input
            type='text'
            onChange = { handleChange('username') }
            value={ currentState.username }
          />
          <input
            type='password'
            onChange = { handleChange('password') }
            value={ currentState.password }
          />
        </div>
      );
    default:
      return null;
  }
};

export default SignupForm;
