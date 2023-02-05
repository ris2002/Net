import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth,deleteUser } from './firebase';
import Nav from './Nav';
import './Profile.css'
import Plansrc from './Plansrc';
function Profile(){



    const user=useSelector(selectUser)
    
   
    return(
        <div className='Profile'>
            <Nav/>
            <div className='Body'>

                <div className='Info'>
                <img    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''/>
                <div className='details'>
                   <b><p className='e'>Edit Profile</p></b> 
               <h2>{user.email}</h2>
                    <div className='Plans'>
                        <h3>Plans</h3>
                        <Plansrc/>


                        <button onClick={()=>auth.signOut()} className='Signout'>Sign Out</button>
                        <button onClick={()=>auth.deleteq() } className='Signout1'>Delete user</button>
                    </div>
                </div>
                </div>
            </div>





        </div>
    )
}
export default Profile;