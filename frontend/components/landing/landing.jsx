import React from 'react';
import SignupForm from './signup_form';

const Landing = ({ signUp }) => {
  return (
    <div>
      <SignupForm signUp={signUp} />
      <div className='about'>
        <ul>
          <li>cool stuff 1</li>
          <li>cool stuff 2</li>
          <li>cool stuff 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
