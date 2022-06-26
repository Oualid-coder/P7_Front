import React, {useState} from 'react';
import axios from 'axios'
import SignIn from './SignIn';

const SignUp =()=>{

    const [pseudo, setPseudo]=useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [ctrlPassword,setCtrlPassword]=useState('')
    const [formSubmit,setFormSubmit]=useState(false)

const handleRegister = async (e)=>{
e.preventDefault()

const pseudoError=document.querySelector('.pseudo.error')
const passwordError=document.querySelector('.password.error')
const passwordConfError=document.querySelector('.password-confirm.error')
const emailError=document.querySelector('.email.error')

passwordConfError.innerHTML=""

if(password!==ctrlPassword ){

    passwordConfError.innerHTML="les mots de passes ne correspondent pas"

}else{

    axios({

method:"post",
url:`${process.env.REACT_APP_API_URL}api/user/register`,
data:{

    pseudo,
    email,
    password

}

    }).then((res)=>{
console.log(res)
        if(res.data.errors){
            console.log(res.data.errors.password)
            pseudoError.innerHTML= res.data.errors.pseudo;
            emailError.innerHTML= res.data.errors.email;
            passwordError.innerHTML= res.data.errors.password;
        }else{
            //s'il n'y a pas d'erreur alors form submit sera a true et se redirige vers page de login pour pouvoir se connecter 
            setFormSubmit(true)
        }
    }).catch((err)=>console.log(err))

}


}
    return(//ternaire 
<>
{formSubmit ? (
    <>
    <SignIn />
    <h4 className='success'>Bravo ! vous êtes inscrit </h4>
    </>
): (


 <form action="" onSubmit={handleRegister} id="sign-up-form">
     <label htmlFor='pseudo' >Pseudo</label>
     <br/>
     <input type="text" name="pseudo" id="pseudo" onChange={(e)=>setPseudo(e.target.value)} value={pseudo} />
     <div className='pseudo error'></div>

     <label htmlFor='email' >Email</label>
     <br/>
     <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
     <div className='email error'></div>

     <label htmlFor='password' >Mot de Passe</label>
     <br/>
     <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
     <div className='password error' ></div>

       <label htmlFor='password-conf' >confirmer le mot de passe </label>
     <br/>
     <input type="password" name="password" id="password-conf" onChange={(e)=>setCtrlPassword(e.target.value)} value={ctrlPassword} />
     <div className='password-confirm  error'></div>  

     <br/>
     
       <input type="submit" value="inscription"/>
 </form>
 )}
 </>
    )
}

export default SignUp;