import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";

export default function Student() {
    const onSignup=()=>{
        document.getElementById("signup").style.visibility="visible";
    }
    const navigate=useNavigate();
    const onRegister=()=>{
        document.getElementById("reg").style.visibility="visible";
    }
  return (
      
      <div>
          <div class="float-left bg-white">
              <img src="https://refier.com/static/media/logo_blue.2d02c09e.svg"  class="mt-6 ml-20"></img>
            </div>
            <div class="float-left bg-white mt-8 ml-52">
              <ul class="flex">
                  <li class="relative left-28">Contact Us</li>
                  <li class="ml-44 oultine-0 border-0"><select>
                      <option>MarketPlace</option>
                      <option>MarketPlace</option>
                      <option>Cohort</option>
                      <option>Courses</option>
                      <option>Webinars</option>
                      </select></li>
                    <li class="ml-10">Jobs</li>
                    <li ><a href="./login" class="ml-10 border pl-10 pr-8 p-2  border-black rounded relative  cursor-pointer"> Login</a></li>
                    <li class="ml-10 border w-32 p-2 pl-10 border-black rounded bg-black font-bold text-white cursor-pointer relative bottom-2" onClick={onRegister}>Register</li>
              </ul>
          </div>
          <div class="clear-left" style={{height:750,backgroundColor:"#cce2ff"}}>
              <div class="float-left">
          <h1 class="pt-16 ml-16  text-5xl text-black">Your Dream&nbsp;<span style={{color:"#3A7B99"}}>Job</span> Is Waiting For You</h1>
          <p class="text-xl ml-16 mt-10">Register And Apply To 10000+ Opportunities</p>
          <button class="border bg-white w-40 p-4 ml-14 mt-12 rounded-lg"><img src="https://refier.com/static/media/checkmark_green.9db70c9d.svg" class="relative top-4"></img><span class="relative bottom-2 left-4">Internships</span></button>
          <button class="border bg-white w-40 p-4 ml-14 mt-12 rounded-lg"><img src="https://refier.com/static/media/checkmark_green.9db70c9d.svg" class="relative top-4"></img><span class="relative bottom-2 left-4">WHF Jobs</span></button><br></br>
          <button class="border bg-white w-40 p-4 ml-14 mt-12 rounded-lg"><img src="https://refier.com/static/media/checkmark_green.9db70c9d.svg" class="relative top-4"></img><span class="relative bottom-2 left-4">Fresher Jobs</span></button>
          </div>
          <div class="float-left">
          <div class="border  bg-white opacity-100 absolute top-0 left-96 mt-16 ml-96 mt-32" style={{width:350,height:650}}>
             <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Frefier.com%3Fid%3Dauth427494&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=851476870905-0hl5ougiapoqcvtd4qflm078qk2sfkem.apps.googleusercontent.com&ss_domain=https%3A%2F%2Frefier.com&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"> <button class="border w-80 border-black ml-4 mt-8 rounded-lg "><FcGoogle class="relative top-4 left-10" size={20}/><span class="relative bottom-2">Sign in with Google</span></button></a><br></br>
             <hr class="mt-8 w-36 ml-4 float-left"></hr> 
             <span class="relative top-6 float-left left-4 text-gray-500">OR</span>
             <hr class="w-36 ml-10 float-left" style={{marginTop:10}}></hr>
             <p class="ml-4 relative top-4 clear-left">Full Name<span class="text-red-500">*</span></p><br></br>
             <input type="text" placeholder='John Doe' class="border w-80 rounded-md ml-4 p-2"></input>
              <p class="ml-4 relative top-4 clear-left">Email<span class="text-red-500">*</span></p><br></br>
             <input type="text" placeholder='+918445523490' class="border w-80 rounded-md ml-4 p-2"></input>
             <p class="ml-4 relative top-4 clear-left">Email<span class="text-red-500">*</span></p><br></br>
             <input type="email" placeholder='Email' class="border w-80 rounded-md ml-4 p-2"></input>
             <p class="ml-4 relative top-4 clear-left">Password<span class="text-red-500">*</span></p><br></br>
             <input type="password" placeholder='Must be atleast 8 characters' class="border w-80 rounded-md ml-4 p-2"></input><br></br>
             <p class="text-xs ml-4 mt-2">By signing up, you agree to our  Terms and Conditions</p>
             <button class="border w-72 bg-black text-white m-10 mt-4 p-2" onClick={onSignup}>Sign Up</button>
             <input type="email" id="signup"  placeholder='Please Enter an Email Id' class="invisible border w-80 rounded-md ml-4 p-2 relative bottom-6" style={{backgroundColor:"#F8FFFF"}} disabled></input>
            <p class="ml-8 relative bottom-4">Already have an account?<a href="./login" style={{color:"#3A7B99"}}>Login</a></p>
          

          </div>
          </div>
          </div>
          <div id="reg" class="border border-gray-300 drop-shadow-2xl bg-white absolute top-0 invisible" style={{width:200,height:110,position:"absolute",left:1050,top:73}}>
             <a href="./student" class="text-lg font-bold relative top-4 left-4">As a Student</a><br></br>
             <a href="./enterprise" class="text-lg font-bold relative top-8 left-4">As an Enterprise</a>

         </div>
      </div>
  );
}
