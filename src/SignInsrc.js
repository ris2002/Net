/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { auth } from './firebase';
import './SignInsrc.css';
function SignInsrc(){
    const Emailref=useRef(null);
    const Passref=useRef(null);

const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
Emailref.current.value,
Passref.current.value


    ).then((authUser)=>{console.log(authUser)})
    .catch((error)=>{alert(error.message)})
};
const SignInn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        Emailref.current.value,
        Passref.current.value

    ).then((authUser)=>{console.log(authUser)})
    .catch((error)=>{alert(error.message)})
};




    return(<div className='Signupsrc'>
        <h1>WELCOME TO NETFLIX</h1>
        <form>
        <input type='email'  ref={Emailref} placeholder="Email Address"/>
        <input type='password'  ref={Passref} placeholder="Password"/>
        <button type='submit' onClick={SignInn}>Sign In</button>
        
        <h4>
            <span className='grey'>New to Netflix?</span>
            <span className='link' onClick={register}>Sign Up now.</span>
             </h4>
        </form>


    </div>)
}
export default SignInsrc;