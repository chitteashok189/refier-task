import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Enterprise() {
    const navigate=useNavigate();
    const onRegister=()=>{
        document.getElementById("reg").style.visibility="visible";
    }
    const onSignup=()=>{
        document.getElementById("signup").style.visibility="visible";
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
                    <li class="ml-10 border w-32 p-2 pl-10 border-black rounded bg-black font-bold text-white relative bottom-2" onClick={onRegister}>Register</li>
              </ul>
          </div>
          <div class="clear-left" style={{height:750,backgroundColor:"#cce2ff"}}>
              <div class="float-left">
          <h1 class="pt-16 ml-16  text-5xl text-black">Hire the&nbsp;<span style={{color:"#3A7B99"}}>Best</span>Employees</h1>
          <p class="text-xl ml-16 mt-10">Register And Post Your Jobs For Free Now</p>
          <button class="border bg-white w-52 p-4 ml-14 mt-12 rounded-lg"><img src="https://refier.com/static/media/checkmark_green.9db70c9d.svg" class="relative top-4"></img><span class="relative bottom-2 left-4">12Mn +Job Seekers</span></button><br></br>
          <button class="border bg-white w-72 p-4 ml-14 mt-6 rounded-lg"><img src="https://refier.com/static/media/checkmark_green.9db70c9d.svg" class="relative top-4"></img><span class="relative bottom-2 left-4">30,000 + Colleges across india</span></button>
          </div>
          <div class="float-left">
          <div class="border  bg-white opacity-100 absolute top-0 left-96 mt-16 ml-96 mt-32" style={{width:350,height:650}}>
             <p class="ml-4 relative top-4 clear-left">Full Name<span class="text-red-500">*</span></p><br></br>
             <input type="text" placeholder='John Doe' class="border w-80 rounded-md ml-4 p-2"></input>
              <p class="ml-4 relative top-4 clear-left">Mobile Number<span class="text-red-500">*</span></p><br></br>
             <input type="text" placeholder='+918445523490' class="border w-80 rounded-md ml-4 p-2"></input>
             <p class="ml-4 relative top-4 clear-left">Official Email Id<span class="text-red-500">*</span></p><br></br>
             <input type="email" placeholder='Email' class="border w-80 rounded-md ml-4 p-2"></input>
             <p class="ml-4 relative top-4 clear-left">Password<span class="text-red-500">*</span></p><br></br>
             <input type="password" placeholder='Must be atleast 8 characters' class="border w-80 rounded-md ml-4 p-2"></input><br></br>
             <p class="text-xs ml-4 mt-2">By signing up, you agree to our  Terms and Conditions</p>
             <button class="border w-72 bg-black text-white m-10 mt-4 p-2" onClick={onSignup}>Sign Up</button>
             <input type="email" id="signup" placeholder='Please Enter an Email Id' class="border invisible w-80 rounded-md ml-4 p-2 relative bottom-6" style={{backgroundColor:"#F8FFFF"}} disabled></input>
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
