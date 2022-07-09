import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post.action';

const Delete =(props)=>{

    const dispatch=useDispatch();

    const deleteQuote = ()=>{

dispatch(deletePost(props.id))


    }

    return (
        <div onClick={()=>{
            if(window.confirm('voulez vous supprimer')){
                 deleteQuote() 
            }
        }}>
Supprimer
        </div>
    )


}

export default Delete