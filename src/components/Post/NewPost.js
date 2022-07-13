import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../utils';
import { NavLink } from 'react-router-dom';
import { addPost, getPosts } from '../../actions/post.action';

const NewPostForm=()=>{
const [isLoading, setIsLoading]=useState(true);
const [message,setMessage]=useState("");
//affichagede photo dans le front
const [postPicture,setPostPicture]=useState(null);
//Affichage photo dans la BDD
const [file,setFile]=useState();
const userData=useSelector((state)=>state.userReducer)
const dispatch=useDispatch()



const handlePost=async(e)=>{
    e.preventDefault();
if(message || postPicture){

    const data = new FormData();
data.append('posterId',userData._id);
data.append('message',message);
if(file) data.append("file",file)

//on dispatch la data et on demande a la BDD  de la renvoyer car on ne connait pas les id des post généré par mongo pour l'edition
 await dispatch(addPost(data))
dispatch(getPosts())
// on remet tout à 0
cancelPost();

}else{
    alert("créer un post")
}
};

const handlePicture=(e)=>{
    //pour previsualisation
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0])
    }

const cancelPost=()=>{
setMessage('');
setPostPicture('');
setFile('');
}

useEffect(()=>{
// on va tester si l'élément est vide ou pas il va chercher dans le reducer si le profil es dispo et afficher notre input form pour poster
    if(!isEmpty(userData)){
        setIsLoading(false)
    }
},[userData,message])


    return (
        <div className='post-container'>
   {isLoading?(
    <i className='fas fa-spinner fa-pulse'></i>
): (
    <>
<NavLink exact to="/profil">
    <div className='user-info'>
        <img src={userData.picture} alt="userimg" />
    </div>
</NavLink>
<div className='post-form' >
    <textarea  name='message' id="message" placeholder='écrire votre post' onChange={(e)=>setMessage(e.target.value)} value={message} />
{message || postPicture ?(
    <li className='card-container'>
        <div className='card-left'>
            <img src={userData.picture} alt="pic" />
        </div>
        <div className='card-right' >
            <div className='card-header' >
                <div className='pseudo' >
                    <h3>{userData.pseudo}</h3>
                </div>
            </div>
            <div className='content' >
                <p>{message}</p>
                <img src={postPicture} alt=""  />
            </div>
        </div>
    </li>
):null}
<div className='footer-form'>
    <div className='icon'>
        <>
        
        <img src='./img/camera-solid.svg' alt='img'        />
        <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" 
        onChange={(e)=> handlePicture(e)} />
        </>
        </div>
        <div className='"btn-send'>
            {message || postPicture ? ( 
                 <button className='cancel' onClick={cancelPost} >annuler</button> ) : null}
           
            <button className='send' onClick={handlePost}>envoyer</button>
        </div>
    </div>
</div>
    </>
)}

        </div>
    )
}

export default NewPostForm;