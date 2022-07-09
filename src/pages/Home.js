import React, { useContext } from 'react';
import {UidContext} from "../components/AppContext";
import NewPostForm from '../components/Post/NewPost';
import Fil from '../components/Fil';

import Log from '../components/Log';



const Home = ()=>{

    const uid=useContext(UidContext)
//si l'utilisateur est connecté on lui laisse la possibilité de posté sinn il doit se reconnecter ou s'inscrire
    return(
<div className='home'>
    <div className='main' >
<div className='home-header'>

{uid ? <NewPostForm/>: <Log signin={true} signup={false}/> }
</div>
     <Fil /> 
    </div>

</div>

    )

}

export default Home