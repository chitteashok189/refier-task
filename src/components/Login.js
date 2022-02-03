import React from 'react';
import {FaArrowRight} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const onLogin=()=>{
        document.getElementById("login").style.visibility="visible";
    }
    const navigate=useNavigate();
    
  return (
      <div>
           <div class="float-left opacity-20">
              <img src="https://refier.com/static/media/logo_blue.2d02c09e.svg"  class="mt-6 ml-20"></img>
            </div>
            <div class="float-left mt-8 ml-20 opacity-20">
              <ul class="flex">
                  <li>Contact Us</li>
                  <li class="ml-32 oultine-0 border-0"><select>
                      <option>MarketPlace</option>
                      <option>MarketPlace</option>
                      <option>Cohort</option>
                      <option>Courses</option>
                      <option>Webinars</option>
                      </select></li>
                    <li class="ml-20">Jobs</li>
                    <li  class="ml-10 border w-32 p-2 pl-10 border-black rounded relative bottom-2"><button>Login</button></li>
                    <li class="ml-10 border w-32 p-2 pl-10 border-black rounded bg-black text-white relative bottom-2"><button>Register</button></li>
              </ul>
          </div>
          <div class="clear-left opacity-20 relative top-10 mr-20 ml-20 rounded-l-3xl rounded-r-3xl" style={{backgroundImage:"url('https://refier.com/static/media/landing_girl_banner.9a24a867.png')",backgroundSize:"cover",height:300}}>
              <h1 class="pt-12 ml-8 text-5xl text-white">Your Dream&nbsp;<span style={{color:"#30D5C8"}}>Job</span> Is Waiting For You</h1>
              <p class="ml-10 mt-4 text-white">Get a Job within 4 Weeks with fixed amount during training </p>
              <h1 class="ml-10 text-white mt-6 text-3xl">3 Lac<sup>+</sup> Students assisted</h1>
              <button class="rounded-3xl text-white mt-16 w-52 ml-10 p-1" style={{backgroundColor:"#30D5C8"}}><span class="relative top-4 text-black font-bold">Apply Now</span> <FaArrowRight class="ml-40 relative bottom-2 text-black" size={30}/></button>


          </div><br></br><br></br><br></br>
          <div class="opacity-20">
              <h1 class="text-center text-3xl">Get hired at</h1>
              <div class="border border-white rounded-lg bg-white drop-shadow-2xl ml-64 mt-8" style={{height:120,width:780}}>
              <img src="https://refier.com/static/media/UniAcco.edc4a23d.png" class="w-60 mt-10 ml-2 inline"></img>
              <img src="https://refier.com/static/media/UniCreds.e6ffc02a.png" class="w-60 mt-10 ml-2 inline"></img>
              <img src="https://refier.com/static/media/UniScholarz.c43269a3.png" class="w-60 mt-10 ml-4 inline"></img>
              
        
              </div>

          </div>
          <div class="border  bg-white opacity-100 absolute top-0 left-96 mt-16 ml-20" style={{width:400,height:500}}>
              <h1 class="text-xl relative top-6 left-4 font-bold inline">Login</h1> <span class="inlne relative top-6 left-72 text-gray-300 text-xl cursor-pointer" onClick={()=>navigate(`/`)}>x</span><br></br><br></br>
             <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Frefier.com%3Fid%3Dauth427494&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=851476870905-0hl5ougiapoqcvtd4qflm078qk2sfkem.apps.googleusercontent.com&ss_domain=https%3A%2F%2Frefier.com&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"> <button class="border w-80 border-black ml-4 mt-8 rounded-lg "><FcGoogle class="relative top-4 left-10" size={20}/><span class="relative bottom-2">Sign in with Google</span></button></a><br></br>
             <hr class="mt-8 w-36 ml-4 float-left"></hr> 
             <span class="relative top-6 float-left left-4 text-gray-500">OR</span>
             <hr class="mt-8 w-36 ml-8 float-left"></hr>
             <p class="ml-4 relative top-8 clear-left">Email<span class="text-red-500">*</span></p><br></br><br></br>
             <input type="email" placeholder='Email' class="border w-80 rounded-md ml-4 p-2" required></input>
             <p class="ml-4 relative top-4 clear-left">Password<span class="text-red-500">*</span></p><br></br>
             <input type="password" placeholder='Must be atleast 8 characters' class="border w-80 rounded-md ml-4 p-2"></input><br></br>
             <button class="border w-72 bg-black text-white m-10 mt-4 p-2" onClick={onLogin}>Login</button>
             <input type="email" id="login"  placeholder='Invalid Name provided' class="invisible border w-80 rounded-md ml-4 p-2 relative bottom-6" style={{backgroundColor:"#F8FFFF"}} disabled></input>
            <p class="ml-8 relative bottom-4">New to Refier?Register as <a href="./student" style={{color:"#3A7B99"}}>Student</a>/<a href="./enterprise" style={{color:"#3A7B99"}}>Enterprise</a></p>
          

          </div>
        

          
      </div>
  );
}
