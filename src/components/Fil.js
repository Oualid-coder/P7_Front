import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.action";
import CardPost from "./Post/CartePost";

const Fil = ()=>{

    const [loadPost,setLoadPost]=useState(true)
const dispatch=useDispatch()
//on récupère les post du store
const posts =useSelector(state=>state.postReducer)
    useEffect(()=>{

        if (loadPost){
            dispatch(getPosts());
            //une fois que les posts sont chargés on ne reload pas les post
            setLoadPost(false)
        }
    },[loadPost,dispatch])


return(
<div>

  <div className="thread-container" >
      <ul>
          {!(posts[0])  && posts.map((post)=>{

              return <CardPost  post={post} key={post._id}  />
          })}
      </ul>
  </div>
</div>

)

}

export default Fil