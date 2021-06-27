import React from 'react'
import './Login.css'




function Login() {

    const logInToApp = () => {

    }

    const register = () => {

    };
    return (
        <div className='login'>
            <img src="./konnekt.png" alt="" />

            <form >
                <input placeholder='Full Name' type="text" />
                <input placeholder='Profile Pic' type="text" />
                <input placeholder=' Email' type="text" />
                <input placeholder='Password' type="password" />
                <button type='submit'>Sign In</button>
            </form>
            <p>Not a Member?
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
