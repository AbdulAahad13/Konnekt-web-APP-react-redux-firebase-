import React, { useState } from 'react'
import './Login.css'




function Login() {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const logInToApp = (e) => {
        e.preventDefault();

    }

    const register = () => {

    };
    return (
        <div className='login'>
            <img src="./konnekt.png" alt="" />

            <form >
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' type="text" />
                <input placeholder='Profile Pic' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder=' Email' type="text" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />
                <button onClick={logInToApp} type='submit'>Sign In</button>
            </form>
            <p>Not a Member?
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
