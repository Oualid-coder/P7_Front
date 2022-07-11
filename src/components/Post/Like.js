import React, { useEffect, useState,useContext } from 'react';
import { UidContext } from '../AppContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch } from 'react-redux';
import { likePost, unlikePost } from '../../actions/post.action';


const Like =({post})=>{

    
    // on va determiner si c'est deja liké ou pas 
const [liked ,setLiked]=useState(false);
const uid=useContext(UidContext);
const dispatch=useDispatch();


const like = () => {
    //implémente le store
    dispatch(likePost(post._id, uid))
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(post._id, uid))
    setLiked(false);
  };

useEffect(()=>{
//post.likers regroupe le array de tout ceux qui on liké le post
    if(post.likers.includes(uid)) setLiked(true)
    //si la premiere condition n'es pa remplie il faut setliked soit false pour pouvoir retirer le heartfill
else{ setLiked(false)}
// on reteste/relance le useEffect la condition si le uid ou le like incrémenté ou si on a le tableau des post likers avec des éléments
},[uid,post.likers,liked])

    return (
<div className='like-container' >
    {uid===null && (
             <Popup
             trigger={<img src="./img/heart.svg" alt="like" />}
             position={["bottom center", "bottom right", "bottom left"]}
             closeOnDocumentClick
           >
             <div>Connectez-vous pour liker</div>
           </Popup>
    )}
      {uid && liked === false && (
        <img src="./img/heart.svg" onClick={like} alt="like" />
      )}
      {uid && liked && (
        <img src="./img/heart-filled.svg" onClick={unlike} alt="unlike" />
      )}
      <span>{post.likers.length}</span>
</div>
    )
}

export default Like;