import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.action";
import CartePost from "./Post/CartePost";
import { isEmpty } from "./utils";

const Fil = ()=>{

    const [loadPost,setLoadPost]=useState(true)
    const [count,setCount]=useState(5)
const dispatch=useDispatch()
//on récupère les post du store
const posts =useSelector(state=>state.postReducer)

const loadMore=()=>{
    if(window.innerHeight+document.documentElement.scrollTop+1>document.scrollingElement.scrollHeight){
setLoadPost(true)
    }
}
    useEffect(()=>{

        if (loadPost){
            dispatch(getPosts(count));
            //une fois que les posts sont chargés on ne reload pas les post
            setLoadPost(false)
            setCount(count + 5)//on incrément de 5 avant la relance de la fonction
        }

        window.addEventListener('scroll',loadMore)
        return ()=>window.removeEventListener('scroll',loadMore)
    },[loadPost,dispatch,count])


return(


  <div className="thread-container" >
      <ul>
          {!isEmpty(posts[0])  &&
           posts.map((post)=>{

              return <CartePost  post={post} key={post._id}  />
          })}
      </ul>
  </div>


)

}

export default Fil