import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Navbar from '../Navbar';


const index = ()=>{

    return(
<div>

<Router>
<Navbar/>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Redirect to="/" />
    </Switch>
            
        
    
</Router>

</div>

    )

}

export default index