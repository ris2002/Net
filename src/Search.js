/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Bertvtv from './Bertvtv'; 
import './App.css';
import Nav1 from './Nav1';
import requests from './Request';
import './Search.css'
import { Tabs,Tab} from '@material-ui/core';
import axios from "./axios"

function Search(){

const[query,setquery]= useState(0);
const SearchMovie= async(e)=>{

    e.preventDefault();
    console.log("Searching")
    try{
      
      const url=fetchSearch
    }
    catch{}
}


    return(
    
    <div className='app'>
    
    <form >
<input type='text' className='y'  placeholder="Search"/><button  className='p' onClick={SearchMovie}>Search
  GET STARTED</button></form>

    </div>)
}
export default Search;