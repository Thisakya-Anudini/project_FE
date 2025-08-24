import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();


function login() {
  console.log(email, password);
  axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login ", {
    email: email,
    password: password
  })
  .then((response) => {
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    toast.success("login successful");
    if(response.data.role =="admin"){
      //window.location.href="/admin";
      navigate("/admin");
    }
    else if(response.data.role =="user"){
      navigate("/");
    }
  })
  .catch((error) => {
    console.log(error);
    //alert("login failed");
    toast.error("login failed");
  });
}


  return (
  <div className="w-full h-screen bg-[url('/1.jpg')] bg-cover bg-center flex justify-center items-center">


      <div className="w-[500px] h-[400px] backdrop-blur-md shadow-2xl rounded-[30px] relative gap-[20px] text-white flex flex-col items-center justify-center">
        <h1 className="absolute top-[10px] text-3xl font-bold text-center mt-3">Login</h1>
        
        <div className="w-[350px] flex flex-col text-left ">
          <span className="text-lg mt-13">Email</span>
          <input onChange={
            (e) => {
                setEmail(e.target.value);
            }
          }
          type="text" className="w-[350px] h-[40px] border border-white rounded-xl" />
        </div>

        <div className="w-[350px] flex flex-col text-left ">
          <span className="text-lg">Password</span>
          <input onChange={
            (e) => {
                setPassword(e.target.value);
                console.log("password is changed")
            }
          }
          type="password" className="w-[350px] h-[40px] border border-white rounded-xl" />
        </div>

        <button onClick={login} className="w-[350px] h-[40px] mt-6  bg-blue-500 rounded-xl text-white text-lg hover:bg-blue-600 transition-all duration-300">
          Login
        </button>
        <p> Don't have an account? <Link to="/register" className= "text-blue-500 font-semibold">Sign up</Link> from here </p>
      </div>
    </div>
  );
}
