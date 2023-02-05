import React, { useRef, useState } from 'react';
import './forgot.css'
import { auth } from './firebase';

export default function Forgot(){
    const Emailref=useRef(null);
    const Passref=useRef(null);
    const register=(e)=>{
    e.preventDefault();//prevent refresh
    auth.createUserWithEmailAndPassword(
Emailref.current.value,
Passref.current.value


    ).then((authUser)=>{console.log(authUser)})
    .catch((error)=>{alert(error.message)})
};
    return(<div>
        <button>hi</button>
    </div>)
}
