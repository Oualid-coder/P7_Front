
import {DELETE_POST, GET_POSTS, LIKE_POST, UPDATE_POST, UNLIKE_POST} from "../actions/post.action"

const initialState={}

export default function postReducer(state=initialState, action){


    switch(action.type){

    case GET_POSTS:
        return action.payload;


case LIKE_POST:
    return state.map((post)=>{
        if(post._id===action.payload.postId){
            return {
                ...post,
                //on rajoute l'id du user dans le array likers et pour ne pas écraser ce qu'il y avait en utilise le spread operator et on met à la suite les likers qu'il y avait avant
                likers:[action.payload.userId, ...post.likers],
            };
        }
        // nous retourne les post si on rentre pas dans la condition sinn il plantera le store car sans return la valeur vos null sinn il mettra à jour le like et retournera le post en question mais pas le reste des post 
        return post;
    })

    case UNLIKE_POST:
        return state.map((post)=>{
            if(post._id===action.payload.postId){
                return {
                    ...post,
                    likers: post.likers.filter((id)=> id !== action.payload.userId),
                };
            }
            return post;
        })

    case UPDATE_POST:    
          return state.map((post)=>{
              if(post._id===action.payload.postId){
                  return {
                    ...post,
                    message: action.payload.message
                  }
                      
              }else return post
          })


case DELETE_POST:
    return state.filter((post)=>post._id !== action.payload.postId)

        default:
            return state;


        }

      
}