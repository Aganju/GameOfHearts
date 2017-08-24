import React from 'react';
import SignupForm from './signup_form';

const Landing = ({ signUp, userCreationErrors, addError }) => {
  return (
    <div>
      <SignupForm
         signUp={signUp}
         addError={addError}
         userCreationErrors={userCreationErrors} />
      <div className='about'>
        <div className='splash-info-div'>
          <h1>We Get to Know <br/> Your True Ambitions</h1>
          <p>
            We ask you interesting questions <br/>
          to find out which house and kingdom <br/>
            you belong to
          </p>
        </div>
        <div className='splash-info-div'>
          <h1>To Find You <br/> Allies And Armies</h1>
          <p>
            Our aged and wise seers <br/>
          use who you are to match you <br/>
            to your destiny
          </p>
        </div>
        <div className='splash-info-div'>
          <h1>So You Can Conquer <br/> the World</h1>
          <p>
            Whether you're looking for a <br/>
          war or not, you'll find fire <br/>
            and blood along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
