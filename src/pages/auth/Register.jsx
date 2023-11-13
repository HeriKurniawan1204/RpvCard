import React, {useState} from 'react'
import { useCreateUser } from "../../services/auth/register_user";

const Register = () => {

    const { mutate : regiterUser , isSuccess, error }= useCreateUser()

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const handleInput = (e) =>{
        if (e) {
            if (e.target.id === "username"){
                setUsername(e.target.value)
            }
            if (e.target.id === "email"){
                setEmail(e.target.value)
            }
            if (e.target.id === "password"){
                setPassword(e.target.value)
            }
        }
    }

    const registerUser =()=>{
        regiterUser({
            "email": Email,
            "name": Username,
            "password": Password
        })
    }

  return (
    <div className="flex flex-col mx-[100px] bg-red-300 gap-[5px] py-[100px] items-center justify-center">
    <h1>Register Page</h1>
    <input className="border-[2px]" placeholder="Email" onChange={handleInput} id='email' type="email"/>
    <input className="border-[2px]" placeholder="Username" onChange={handleInput} id='username' type="text"/>
    <input className="border-[2px]" placeholder="Password" onChange={handleInput} id='password' type="password"/>
    <button className="bg-blue-400 rounded text-white" onClick={()=>{registerUser()}}>Register</button>
    </div>
  )
}

export default Register