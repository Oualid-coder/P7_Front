import React, { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {dateParser, isEmpty} from "../utils";
import { updatePost } from '../../actions/post.action';

import Delete from './Delete';
import Like from './Like';
// import { post } from '../../../../routes/user.routes';

const CardPost =({ post })=>{
const [isLoading,setIsLoading ]=useState(true);
const usersData= useSelector((state)=> state.usersReducer);
const userData= useSelector((state)=> state.userReducer);
const [isUpdated,setIsUpdated]=useState(false);
const [textUpdate, setTextUpdate]=useState(null);
const [showComments,setShowCommments]=useState(false);


const dispatch = useDispatch()

const updateItem=  ()=>{
if(textUpdate){
    dispatch(updatePost(post._id,textUpdate))
}
//on remet sur false une fois l'edition effectué
setIsUpdated(false);

}

useEffect(()=>{

!isEmpty(usersData[0]) && setIsLoading(false)

}, [usersData]);


    return (
       
<li className='card-container' key={post._id}>

    {isLoading ? (
        <i className='fas fa-spinner fa-spin'></i>
    ) : (

        <>
       
        <div className='card-left'>

        <img src={
            !isEmpty(usersData[0]) && 
                usersData.map((user)=>{
            if(user._id === post.posterId) 
            return user.picture ;
            else return null;
        }).join("")} 

        alt="poster-pic" />
        </div>

        <div className='card-right'>
            <div className='card-header'>
<div className='pseudo'>
    <h3>
    {!isEmpty(usersData[0]) && 
    usersData.map((user)=>{
            if(user._id===post.posterId) return user.pseudo;
            else return null
        }).join("")}


    </h3>


</div>
<span>{dateParser(post.createdAt)}</span>
            </div>
{isUpdated === false && <p>{post.message}</p>}
{isUpdated && (
    <div className='update-post'>
        <textarea defaultValue={post.message} onChange={(e)=>{setTextUpdate(e.target.value)}} />
        <div className='button-container'>
<button className='btn' onClick={updateItem}>valider modification</button>
        </div>
    </div>
)}
{post.picture && (
    <img src={post.picture} alt="card-pic" />
)}

{(userData._id===post.posterId || userData.isAdmin===true)  && (
    <div  className='button-container'>
        <div onClick={()=>setIsUpdated(!isUpdated)} >edit</div>

       <Delete id={post._id}/>
    </div>
)}
<div className='card-footer'>
    <div className='comment-icon' >


    </div>
    <div>commentaire</div>
    <Like  post={post}/>

</div>


</div>
        </>
    )}

    
    
</li>

    );
};

export default CardPost