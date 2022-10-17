import React, { useState } from 'react';
import PostSignupOrLogin from '../../apis/PostSignupOrLogin';
import saveUserCookies from '../../Utils/saveUserCookies';
import Login from './FormContents/LoginContents';
import RegisterSeller from './FormContents/RegisterSellerFormContents';
import RegisterUser from './FormContents/RegisterUserFormContents';

const Auth = ({ showProfileDraw }) => {
  const [form, setForm] = useState({});
  const [mode, setMode] = useState('login');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await PostSignupOrLogin(form, mode);
    user && saveUserCookies({ mode, ...user });

    window.location.reload();
  };

  const switchMode = (newMode = '') => {
    if (newMode.length) {
      setMode('signupSeller');
    } else setMode(mode === 'signup' ? 'login' : 'signup');
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          {mode === 'signup' && <p>Sign Up</p>}
          {mode === 'login' && <p>Sign In</p>}
          {mode === 'signupSeller' && <p>Sign Up as Seller</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-2">
            {mode === 'signupSeller' && (
              <RegisterSeller handleChange={handleChange} />
            )}
            {mode === 'signup' && <RegisterUser handleChange={handleChange} />}
            {mode === 'login' && <Login handleChange={handleChange} />}

            <div className="auth__form-container_fields-content_button">
              <button>{mode === 'login' ? 'Login' : 'Register'}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account flex flex-col items-start py-2">
            <p>
              {mode === 'signup' && 'Already have an account?'}
              {mode === 'login' && "Don't have an account?"}

              <span onClick={switchMode}>
                {mode === 'signup' ? 'login' : 'signup'}
              </span>
            </p>
            {mode !== 'signupSeller' && (
              <span onClick={() => switchMode('signupSeller')}>
                Sign Up as a seller
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img
          src={
            mode === 'signup'
              ? 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
              : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80'
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Auth;
