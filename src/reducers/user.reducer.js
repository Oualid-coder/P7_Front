import { GET_USER, UPLOAD_PICTURE } from "../actions/user.actions";

const initialState={};
//nous faison des dispatch pour ce retrouver ici et switcher entre les différentes possiblités
export default function userReducer(state=initialState,action){


    //il faut toujours initialiser le state
switch (action.type){
    //on incrément notre state avec notre payload on injecte les data à l'interieur ainsi nos data seront accessible partt sur notre site par tout les composants 
case GET_USER:
    return action.payload
    
case UPLOAD_PICTURE:
   return {

       //on récupere nos données avec le spread et ttes les données on écrase pas les données mais on change les données de picture
       ...state,
       picture: action.payload,  // cequi es contenu dans notre payload dans notre user.actions

   }
    default : 
    return state;
}

}