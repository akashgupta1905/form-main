import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const Singnup=()=>{
    const [user,setUser]=useState({email:'',password:''});

    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")
    const navigate=useNavigate()
    

    
    async function implementSingup(e){
        e.preventDefault()

        if(!user.email || !user.password){
            setError("All fields are required")
            setSuccess("")
            return;
        }
        try{
            let response=await axios.post("https://dummyjson.com/auth/login",{username:user.email,password:user.password},)
            console.log(response.data)
            console.log(response.data.email)
            localStorage.setItem("user",JSON.stringify(response.data))
            setSuccess("Succesfullyloggedin")
            navigate("/Login")

        }
        catch(e){
            setError(e.message)
        }
       
    }
    return(
        <div className="singup">
            <div className="userinfo">
                <div>
                    <p>Welcome back! 👋</p>
                    <h3>Sign in to your account</h3>
                </div>
                <label>Your email</label><br/>
                <input type="text" placeholder="Enter mail" onChange={(e)=>setUser({...user,email:e.target.value})}/>
                <label>Password</label><br/>

                <input type="password" placeholder="Enter Password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                <button onClick={implementSingup}>Continue</button>

                
                



            </div>
            <div className="userMessage">
                
                <p>Don't have an account?<a href="#">Singnup</a></p>
                {error?<p>{error}</p>:<p>{success}</p>}

            </div>
           
           

        </div>
    )
}
export default Singnup