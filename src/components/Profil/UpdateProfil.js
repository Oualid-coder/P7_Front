import React from 'react';
import { useSelector } from 'react-redux';
import UploadImg from './UploadImg';
import { dateParser } from '../utils';


const UpdateProfil=()=>{
const userData = useSelector((state)=>state.userReducer)
    return(
        <div>
           <h1>Profil de {userData.pseudo}</h1>
           <div className='update-container' >
               <div className='left-part' >
                   {/* <h3>photo de {userData.pseudo} </h3> */}
               <img src={userData.picture} alt="user-pic"/>
                   <UploadImg/>
                 <p id='membre'> membre depuis : {dateParser(userData.createdAt)} </p>
               </div>
           </div>
        </div>
    )
}

export default UpdateProfil;