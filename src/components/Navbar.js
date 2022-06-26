import React,{useContext} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {UidContext} from './AppContext'
import Logout from './Log/Logout';

const Navbar =()=>{

//on recupere uid pour un affichage conditionnelle 
const uid= useContext(UidContext)
const userData=useSelector((state)=>state.userReducer)
    return ( 
<nav>
    <div className='nav-container'>
        <div  className="logo">
<NavLink exact to="/">
<div className='logo' >
    
    <img src='./img/icon-left-font-monochrome-black.png' alt='icon'/>
   
</div>
</NavLink>
        </div> 
        
        
{uid ? (
    <ul>
        <li></li>
        <li className='welcome'>
            <NavLink exact to="/profil">
<h5>Bienvenue {userData.pseudo}</h5>
            </NavLink>
        </li>
     <NavLink exact to="/"> <Logout /> </NavLink> 
    </ul>
):(
    <ul>
        <li></li>
        <li>
            <NavLink exact to="/profil">
Se connecter
            </NavLink>
        </li>
    </ul>
)}

    </div>
</nav>
    )
}

export default Navbar