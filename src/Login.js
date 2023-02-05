/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import SignInsrc from "./SignInsrc";
import './Login.css';

function Login(){

const[SignIn,SetSignIn]=useState(false);



    return(<div className='Login'>

<div className='loginbackground'>
    <img   
    className='loginscreenlogo'    
    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
    alt=''/>

    <button  onClick={()=>SetSignIn(true)}
    className='Login_button'>Sign In</button>
    <div className='Login_gradient'/>
    <div className='Login_body'>
        {SignIn?(
            <SignInsrc/>
        ):
        <>
        <h1>Unlimited movies, TV shows and more. </h1>
        <h2>Watch anywhere.Cancel at any time.</h2>
        <h3>Ready to watch? Enter your email address to create or restart your membership </h3>
        <div className='Login_ip'>
<form >
<input type='email' placeholder="Email Address"/><button  onClick={()=>SetSignIn(true)}
className='Signup'> GET STARTED</button>


</form>


        </div>
        </>
        
        
        
        }

        
    </div>

</div>

    </div>)
}
export default Login;