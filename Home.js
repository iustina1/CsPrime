import React, { useState } from 'react';
import './AuthStyles.css'; // Keep styles in a separate CSS file
import CSPRIME from '../Assets/CSPRIME.png'; // Import your logo file

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log(isLogin ? 'Logging in...' : 'Signing up...', { email, password });
    };

    return (
        <div className="auth-wrapper">
            {/* Left Side - Logo Section */}
            <div className="auth-logo">
                <img src={CSPRIME} alt="CSPRIME Logo" className="logo-image" />
            </div>

            {/* Right Side - Login/Signup Box */}
            <div className="auth-container">
                <h2 className="auth-title">{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="input-container">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="input-field"
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="submit-button">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="auth-switch">
                    {isLogin ? (
                        <>
                            Don't have an account? <span className="auth-link" onClick={() => setIsLogin(false)}>Sign Up</span>
                        </>
                    ) : (
                        <>
                            Already have an account? <span className="auth-link" onClick={() => setIsLogin(true)}>Login</span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
