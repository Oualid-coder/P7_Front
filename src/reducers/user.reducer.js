import { GET_USER } from "../actions/user.actions";

const initialState={};

export default function userReducer(state=initialState,action){


    //il faut toujours initialiser le state
switch (action.type){
    //on incrément notre state avec notre payload on injecte les data à l'interieur ainsi nos data seront accessible partt sur notre site par tout les composants 
case GET_USER:
    return action.payload

    default : 
    return state;
}

}