

import React, { useEffect, useState } from 'react';
import { UidContext } from './AppContext';
import Routes from "./Routes/index";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {getUser} from '../actions/user.actions'

const  App=()=> {

  const [uid,setUid]=useState(null)
  // ici on dispatch une action pour déclencher une action
const dispatch=useDispatch()

  useEffect( ()=> { 
    const fetchId= async()=>{
      await axios({

        method:"get",
        url:`${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials:true
      }).then((res)=>{

        console.log(res);
        setUid(res.data);
      
      })
        
        .catch((err)=>console.log('pas de token'))
      
    }
    fetchId()
    //si uid est disponible on la passe en paramétre via la fonction getUser dans action et est mis a jour a chaque la valeur de uid evolue
if(uid){
  dispatch(getUser(uid))
}


  },[uid,dispatch])

  return (
   <UidContext.Provider value={uid}>
      
      <Routes/>

    </UidContext.Provider>
  );
}

export default App;
