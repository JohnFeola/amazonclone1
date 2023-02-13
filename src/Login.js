import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase.js';
// import { useStateValue } from './StateProvider';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        //now firebase login
    }


    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'><img className='login__logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FAmazon-Logo.png&f=1&nofb=1&ipt=620d2b0f0adecc228a13c17b10cffb5b58802e4e503d7ff28c469a7f3a9cdbb8&ipo=images' alt=''/></Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>
            {/* <p></p> */}
            <small>By signing-in you agree to John Feola's Terms & Conditions, which do not actually exist</small>
            {/* <p></p> */}
            <button onClick={register} className='login__registerButton'>Create Account</button>
        </div>
    </div>
  )
}

export default Login;