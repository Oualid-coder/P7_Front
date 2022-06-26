import React from 'react';
import { useSelector } from 'react-redux';
import TelechImg from './TelechargerImg';


const UpdateProf=()=>{
const userData = useSelector((state)=>state.userReducer)
    return(
        <div>
           <h1>Profil de {userData.pseudo}</h1>
           <div className='update-container' >
               <div className='left-part' >
                   <h3>photo de {userData.pseudo} </h3>
               
                   <TelechImg/>
                 
               </div>
           </div>
        </div>
    )
}

export default UpdateProf;