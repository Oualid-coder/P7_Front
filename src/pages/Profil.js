import React, { useContext } from 'react';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';
import UpdateProf from '../components/Profil/UpdateProf';

//import de l'id de l'utilisateur 

const Profil = ()=>{
const uid=useContext(UidContext)
    return(
        //création d'un ternaire qui permettra de basculer sur le fil d'actualité  au lieu de la page pour logger si l'utilisateur est deja logger et donc il y a un id
<div className='profil-page'>

    {uid ? (
       <UpdateProf/>
    ): (
<div className='log-container'>
    <img src='../img/terre.png' alt='logo' id="terre"/>
<Log signin={false} signup={true}/>
<div className='img-container'>

    {/* <img src='../img/icon-left-font.png' alt='logo'/> */}
</div>

</div>
)}
</div>

    )

}

export default Profil