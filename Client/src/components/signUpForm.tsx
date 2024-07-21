import React, { useState } from 'react';
import './signUpForm.css';

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({ firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div className="signup-container">
      <h1 className="title">Teaco</h1>
      <h2 className="subtitle">Get started with your teamwork journey</h2>
      <p className="login-link">Already have an account? <a href="/login">Log In</a></p>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Your name" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="signup-button">Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;
