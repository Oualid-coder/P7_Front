import axios from "axios";

export const GET_USER="GET_USER";
export const UPLOAD_PICTURE="UPLOAD_PICTURE";
export const GET_USER_ERRORS = "GET_USER_ERRORS";

export const getUser=(uid)=>{

    return (dispatch)=>{
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
        .then((res)=>{
            dispatch({type:GET_USER, payload:res.data})
        }).catch((err)=>console.log(err))
    }
}
// notre fonction recevra la data qu'on va transmettre au backend et l'id 
export const uploadPicture=(data,id)=>{
// dispatch pour envoyer  à la BDD avant et au reducer 
    return(dispatch)=>{
//on passe data dans notre back en tant que parametre dans le post
        return axios
        // on envoie à la base de données
        .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
        .then((res)=>{
if(res.data.errors){
    dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
}else{
    dispatch({ type: GET_USER_ERRORS, payload: "" });
}



//on refait un get avec les données mise à jours en utilisant le user id pour obtenir nos nvelle photo upl et que le reducer puisse changer le store en conséquence :: il va donc nous refournir ce qu'on a stocker en BDD
            return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
            .then((res)=>{
                // on va ici dispatcher au reducer notre action UPLOAD_PHOTO et on envoi dans le payload res.Data.pic il va changer le chemin / mettre a jour le chemin de notre utilisateur dans le store 
                dispatch({type: UPLOAD_PICTURE, payload: res.data.picture} )
            })
        })
        .catch((err)=>console.log(err))
    }
}