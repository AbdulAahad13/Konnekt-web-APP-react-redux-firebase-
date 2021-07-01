import React, { useState } from 'react'
import { auth } from './firebase';
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux';
import './Login.css'




function Login() {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [konnektLink, setKonnektLink] = useState('');
    const dispatch = useDispatch();

    const logInToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,

            }))
        })
    };

    const register = () => {
        if (!name) {
            return alert('Please enter full name!')
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: konnektLink,
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: konnektLink,
                    }));
                });
        }).catch(error => alert(error));
    };


    return (
        <div className='login'>
            <img src="./konnekt.png" alt="" />

            <form >
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name required if registering' type="text" />
                <input value={konnektLink} onChange={e => setKonnektLink(e.target.value)} placeholder='Konnekt Link' type="text" />
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
