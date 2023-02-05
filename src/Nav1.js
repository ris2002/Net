/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import  './Nav.css';
import { Link,NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';
function Nav1(){
    
    const history=useHistory()
    //The React useState Hook allows us to track state in a function component. 
    // now making a function trasition bar
    const[show,handleShow]=useState(false);
    const trasitionNavbar=()=>{
        if(window.scrollY>100){handleShow(true);}
        else{handleShow(false);}
    };
    useEffect(()=>{
        window.addEventListener("scroll",trasitionNavbar);
        return()=>window.removeEventListener('scroll',trasitionNavbar)
    },[]);

    return(
<div className={`Nav ${show &&`Nav__black`}`}>
  
    <div className='Nav_contents'>
    <img  onClick={()=> window.open("/",'self')} className='Nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>
<img className='Nav_avatar'  onClick={()=> window.open("/Profiles",'self')} src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''/>

<form >
<input type='text' className='y'  placeholder="Search"/><button  className='p'
> GET STARTED</button>


</form>

    </div>
    <nav>

</nav>

</div>
    )
}
export default Nav1;