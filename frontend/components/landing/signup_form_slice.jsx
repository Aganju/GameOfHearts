import React from 'react';

const SignupForm = ({slice, handleChange, currentState}) => {

  const optionCreator = (options) => {
    return options.map((option, idx) => {
        return <option key={idx} value={option}>{option}</option>;
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
          <div id='thrones'>
            <h1>
              THRONES, <br/>
            NOT <i>JUST</i> GAMES
            </h1>
            <h3>
              There are two kinds of throne chasers:<br/>
              Those who win and those who die<br/>
            We make sure you find out which you are as <br/>
          quickly as possible, nice change right?
            </h3>
          </div>
          <span>You are a</span>
          <div className ='inputs'>
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
                { optionCreator(['Woman', 'Man', 'Other']) }
              </select>
          </div>
        </div>
      );
    case 1:
      return(
        <div id='form-slice2'>
          <div id='thrones'>
            <h2>Your kingdom awaits! Just a fey keystokes away</h2>
          </div>
          <div id='birthdate'>
            <span>Birthdate</span>
            <div className='inputs'>
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
            </div>
          </div>
          <div id = 'location-and-email'>
            <div id='location'>
              <span>Location</span>
              <input
                type='text'
                onChange = { handleChange('location') }
                value={ currentState.location }
              />
            </div>
            <div id='email'>
              <span>Email</span>
              <input
                type='text'
                onChange = { handleChange('email') }
                value={ currentState.email }
              />
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <div id='thrones'>
            <h2>{'Ahh, the iron throne. Don\'t stop now!'} </h2>
          </div>
          <div className='inputs'>
            <label>
              Username
              <input
                type='text'
                onChange = { handleChange('username') }
                value={ currentState.username }
                />
            </label>

            <label>
              Password
              <input
                type='password'
                onChange = { handleChange('password') }
                value={ currentState.password }
                />
            </label>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default SignupForm;
