import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/fetch-users';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    const message = await signInUser({ email, password });
    console.log(message);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const message = await signUpUser({ email, password });
    console.log(message);
  }

  return (
    <div>
      <div className="signIn">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <label>
            Email
            <input required type="email" name="email" onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            Password
            <input required type="password" name="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <button>Sign In</button>
        </form>
      </div>
      <div className="signUp">
        <h1>Sign In</h1>
        <form onSubmit={handleSignUp}>
          <label>
            Email
            <input required type="email" name="email" onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            Password
            <input required type="password" name="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
