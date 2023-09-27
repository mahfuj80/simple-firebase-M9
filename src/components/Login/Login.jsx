import React from 'react';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log('google mama is coming');
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google login</button>
    </div>
  );
};

export default Login;
