import React from 'react';
import {FaArrowRight} from "react-icons/fa";
import {AiOutlineInstagram,AiOutlineTwitter,AiFillLinkedin,AiFillYoutube} from "react-icons/ai";
import {RiFacebookFill} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export default function Page() {
    const onRegister=()=>{
        document.getElementById("reg").style.visibility="visible";
    }
    const navigate=useNavigate();
  return (
      <div>
          <div class="float-left">
              <img src="https://refier.com/static/media/logo_blue.2d02c09e.svg"  class="mt-6 ml-20"></img>
            </div>
            <div class="float-left mt-8 ml-52">
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
                    <li class="ml-10 border w-32 p-2 pl-10 border-black rounded relative bottom-2 cursor-pointer" onClick={()=>navigate(`./login`)}><button onClick={()=>navigate(`./login`)}>Login</button></li>
                    <li class="ml-10 border w-32 p-2 pl-10 border-black rounded cursor-pointer bg-black font-bold text-white relative bottom-2" onClick={onRegister}>Register</li>
              </ul>
          </div>
          <div class="clear-left relative top-10 mr-20 ml-20 rounded-l-3xl rounded-r-3xl" style={{backgroundImage:"url('https://refier.com/static/media/landing_girl_banner.9a24a867.png')",backgroundSize:"cover",height:300}}>
              <h1 class="pt-12 ml-8 text-5xl text-white">Your Dream&nbsp;<span style={{color:"#30D5C8"}}>Job</span> Is Waiting For You</h1>
              <p class="ml-10 mt-4 text-white">Get a Job within 4 Weeks with fixed amount during training </p>
              <h1 class="ml-10 text-white mt-6 text-3xl">3 Lac<sup>+</sup> Students assisted</h1>
              <button class="rounded-3xl text-white mt-16 w-52 ml-10 p-1" style={{backgroundColor:"#30D5C8"}}><span class="relative top-4 text-black font-bold">Apply Now</span> <FaArrowRight class="ml-40 relative bottom-2 text-black" size={30}/></button>


          </div><br></br><br></br><br></br>
          <div>
              <h1 class="text-center text-3xl">Get hired at</h1>
              <div class="border border-white rounded-lg bg-white drop-shadow-2xl ml-64 mt-8" style={{height:400,width:780}}>
              <img src="https://refier.com/static/media/UniAcco.edc4a23d.png" class="w-60 mt-10 ml-2 inline"></img>
              <img src="https://refier.com/static/media/UniCreds.e6ffc02a.png" class="w-60 mt-10 ml-2 inline"></img>
              <img src="https://refier.com/static/media/UniScholarz.c43269a3.png" class="w-60 mt-10 ml-4 inline"></img>
              <img src="https://refier.com/static/media/powerplay-logo.f9e322c7.svg" class="w-60 mt-10 ml-2 inline"></img>
              <img src="https://refier.com/static/media/senRa_logo.0ce6d803.jpg" class="w-60 mt-10 ml-2 inline"></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU8AAABDCAIAAACTGhBqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjZCMTBFRjUzMzdDMTFFQUEwODdENjhGNjNBNzVDQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjZCMTBFRjYzMzdDMTFFQUEwODdENjhGNjNBNzVDQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNkIxMEVGMzMzN0MxMUVBQTA4N0Q2OEY2M0E3NUNDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNkIxMEVGNDMzN0MxMUVBQTA4N0Q2OEY2M0E3NUNDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgdJ/q4AABoQSURBVHja7F0HWBTX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" class="w-60 mt-10 ml-2 inline"></img>
              <img src="https://refier.com/static/media/saarthi.fea9ee7c.svg" class="w-60  ml-2 inline"></img>
        
              </div>

          </div>
          <div class="border mt-20" style={{height:500,backgroundColor:"#A1A1A11A"}}>
              <h1 class="text-center text-3xl font-bold pt-8">Follow easy 5 steps</h1>
              <hr class="border-dashed border-gray-300 mt-16 ml-32 mr-32"></hr>
              <h1 class="border w-10 rounded-full p-1 pl-4 bg-white border-green-300 ml-24 relative bottom-4">1</h1>
              <h1 class="border w-10 rounded-full p-1 pl-4 bg-white border-green-300" style={{marginLeft:340,position:"relative",bottom:50}}>2</h1>
              <h1 class="border w-10 rounded-full p-1 pl-4 bg-white border-green-300" style={{marginLeft:610,position:"relative",bottom:83}}>3</h1>
              <h1 class="border w-10 rounded-full p-1 pl-4 bg-white border-green-300" style={{marginLeft:900,position:"relative",bottom:115}}>4</h1>
              <h1 class="border w-10 rounded-full p-1 pl-4 bg-white border-green-300" style={{marginLeft:1133,position:"relative",bottom:150}}>5</h1>
              <div class="bg-white float-left rounded-lg ml-20 relative bottom-28" style={{width:180,height:150}}>
                  <img src="https://refier.com/static/media/user_vector.1cf05ce6.svg" class="ml-6 relative top-16"></img>
                  <h1 class="ml-16 mt-6 text-xl">Create</h1>
                  <h1 class="ml-16 text-xl">Account</h1>

              </div>
              <div class="bg-white float-left rounded-lg ml-14 relative bottom-28" style={{width:180,height:150}}>
                  <img src="https://refier.com/static/media/apply_vector.39890733.svg" class="ml-4 relative top-16"></img>
                  <h1 class="ml-14 mt-10 text-xl">Apply for job</h1>

              </div>
              <div class="bg-white float-left rounded-lg ml-14 relative bottom-28" style={{width:180,height:150}}>
                  <img src="https://refier.com/static/media/checkmark_vector.5f69f484.svg" class="ml-6 relative top-16"></img>
                  <h1 class="ml-16 mt-6 text-xl">Clear the</h1>
                  <h1 class="ml-16 text-xl">Interviews</h1>

              </div>
              <div class="bg-white float-left rounded-lg ml-14 relative bottom-28" style={{width:180,height:150}}>
                  <img src="https://refier.com/static/media/eval_vector.04f4c946.svg" class="ml-6 relative top-16"></img>
                  <h1 class="ml-16 mt-6 text-xl">Learning and</h1>
                  <h1 class="ml-16 text-xl">Evaluation</h1>

              </div>
              <div class="bg-white float-left rounded-lg ml-14 relative bottom-28" style={{width:180,height:150}}>
                  <img src="https://refier.com/static/media/hired_vector.3f293c89.svg" class="ml-6 relative top-16"></img>
                  <h1 class="ml-16 mt-10 text-xl">HIRED</h1>
                 
              </div>
              <p class="clear-left text-center text-xl relative bottom-16">Not the end… if you don't get hired, we are here to handhold you. All this at<span style={{color:"#3A7B99"}}>NO COST.</span> </p>
              <button class="relative bottom-10 left-40 bg-black text-white border w-40 rounded-md p-2 ml-96">Apply Now</button>

          </div>
          <div class="" style={{height:650}}>
              <div class="float-left">
                 <div class="bg-white drop-shadow-xl mt-20 ml-16" style={{width:300,height:100}}>
                     <img src="https://refier.com/static/media/avatar_vector.43240eec.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#3A7B99"}}></img>
                     <h1 class="ml-20 relative bottom-6 text-lg font-bold">Introduction to Platform</h1>

                 </div>
                 <div class="border-gray-300 border drop-shadow-xl mt-6 ml-16" style={{width:300,height:100}}>
                     <img src="https://refier.com/static/media/jobseeker_vector.4829e31e.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                     <h1 class="ml-24 relative bottom-10 text-lg font-bold">Jobsearch &amp;</h1>
                     <h1 class="ml-24 relative bottom-10 text-lg font-bold">Interview Training</h1>

                 </div>
                 <div class="border-gray-300 border drop-shadow-xl mt-6 ml-16" style={{width:300,height:100}}>
                     <img src="https://refier.com/static/media/idea_vector.638af5b4.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                     <h1 class="ml-24 relative bottom-10 text-lg font-bold">Sales Development</h1>
                     <h1 class="ml-24 relative bottom-10 text-lg font-bold"> Training</h1>

                 </div>
                 <div class="border-gray-300 border drop-shadow-xl mt-6 ml-16" style={{width:300,height:100}}>
                     <img src="https://refier.com/static/media/tool_vector.6331455e.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                     <h1 class="ml-20 relative bottom-6 text-lg font-bold">Sales Tools Training</h1>

                 </div>
              </div>
              <div class="float-left ml-20 mt-20">
                  <h1 class="text-3xl font-bold">Program Details</h1>
                  <p class="mt-8 text-gray-700 text-xl">The last day, we’ll focus on the most important part. Selling what you’ve</p>
                  <p class="mt-2 text-gray-700 text-xl">learned to employers.</p>
                  <p class="mt-6 text-gray-700 text-xl">As a top SDR, you cannot be submitting resumes and waiting for answers</p>
                  <p class="mt-2 text-gray-700 text-xl">from Hiring Managers… That’s old-school and careless. You have to be</p>
                  <p class="mt-2 text-gray-700 text-xl">proactive to stand out from the crowd. We’ll show you how.</p>
                  <button class="border w-40 p-2 mt-8 text-white" style={{backgroundImage:"linear-gradient(271.79deg,teal -5.58%,#30d5c7 123.32%)"}}>Apply Now</button>
                  

              </div>

          </div>
          <div class="" style={{height:350,backgroundColor:"#FCFCFC"}}>
              <div class="relative  top-10 float-left ml-20">
                  <h1 class="text-5xl font-bold">Learning The</h1>
                  <h1 class="text-5xl font-bold mt-2">Right Way</h1>
                  <p class="mt-4 text-lg">Direct entry to the final round of interviews in</p>
                  <p class="mt-1 text-lg">any job after <span style={{color:"#30D5C8"}}>training and evaluation</span> </p>
                  <button class="w-40 mt-10 text-white p-2 bg-black">Apply Now</button>
              </div>
              <div class="float-left mt-10 ml-32">
                  <div class="bg-white rounded-lg drop-shadow-xl" style={{width:300,height:140}}>
                  <img src="https://refier.com/static/media/training_vector.45c9f46a.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                  <div class="ml-24 relative bottom-12">
                  <h4>Core LIVE Sales</h4>
                  <h1>Training</h1>
                  <p>Industry Experts with 4-8</p>
                  <p>years of Experience</p>
                  </div>
               

                  </div>
                  <div class="bg-white rounded-lg drop-shadow-xl  mt-10" style={{width:300,height:100}}>
                  <img src="https://refier.com/static/media/session_vector.6dc844f3.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                  <div class="ml-24 relative bottom-8">
                  <h4>Classroom sessions</h4>
                  <p>on all important topics</p>
                  </div>
               

                  </div>

              </div>
              <div class="float-left ml-10 mt-10">
              <div class="bg-white rounded-lg drop-shadow-xl  mt-10" style={{width:300,height:100}}>
                  <img src="https://refier.com/static/media/teaching_vector.9265be13.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                  <div class="ml-24 relative bottom-8">
                  <h4>1 on 1</h4>
                  <p>Practice sessions with </p>
                  <p>trainers</p>
                  </div>
               

                  </div>
                  <div class="bg-white rounded-lg drop-shadow-xl  mt-10" style={{width:300,height:100}}>
                  <img src="https://refier.com/static/media/teaching_vector.9265be13.svg" class="border p-4 rounded-full relative top-6 left-4" style={{backgroundColor:"#0080800D"}}></img>
                  <div class="ml-24 relative bottom-10">
                  <h4>Career Mentorship</h4>
                  <p>1 on 1 sessions with</p>
                  <p>experts</p>
                  </div>
               

                  </div>

              </div>
              <div>
                  

          </div>
          </div>
          <div style={{height:340}}>
              <div class="float-left mt-20 ml-32">
               <img src="https://refier.com/static/media/semicolon_vector.b996d4d5.svg"></img>
               <h1 class="text-3xl font-bold mt-8">What The Job</h1>
               <h1 class="text-3xl font-bold mt-2">Holders Say About</h1>
               <h1 class="text-3xl font-bold mt-2">Us</h1>
               </div>
               <div class="float-left mt-20 ml-32 bg-white border drop-shadow-2xl rounded-xl" style={{width:630,height:230}}>
                   <img class="rounded-full float-left mt-4 ml-8 w-20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAA3NCSVQICAjb4U/gAAAAVFBMVEXHx8ft7e3Jycnd3d3v7+/39/fR0dHn5+f////X19fh4eHz8/PMzMzr6+v7+/vl5eXZ2dnV1dXx8fHp6en19fX5+fnf39/////b29vT09Pj4+PPz89ZSaaiAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yMy8xMzoQe4sAAAPWSURBVHic7dvrcqJAEAVgBLnfJVoa3v89F3TdZBPp6XMGhlRqzm9Lvxp67hgcfmSCvQGv41lIPAuJZyHxLCSehcSzkHgWEs9C4llIPAuJZyH51ay06PokSfo8Slf5vjVYbV4FHwlvhf1X2rOKMfia6lrvzGq/o+6wy66s/CVqzm3YjTW8bqq/DdbuxEpDQTXFxsWzTCorF80yq4KAH8RollRXz4TOWct98HOSo1tWoVIFATvik6zKLHqEbC6OFWlVQce5KFat6IXPnNyx9I0VBBHVXBRLMzj8S+yKlSKqgFrkMKwrxOpKR6wEYlVnRyygH85hiotg1ZgqOBB9kWC1ICsliotgaefDZ4o3J6wLyIqI4iJYyBj/g1kXNyy4ttyw0J7YumFhU+I0KbrpiQeQVboZt/Qr5kcaYiXIsHpINWbETzAsbISIGkcscBnoaAUBFlfjahmo3FI/cmNKi2MhTzFlSovcvgJbn4YYTLffVefUMyRZ+nXzkdlg0Ecj2qIfM6Yf0ixt0Q9UwfPHbroJqCIbi2bpmivlCt7i7FRTXWxlWbAGBatmG8viXL4zqhK6sWxuMYwTdkl2QzuWaQcUZdwBpSXrcBNVYUOdA9qz5EGCHhxsWeIgMWbU0mENljRIWDWW5e3r8hQU8oODPWu5M0ZWjWXJWl53UfudtVjLQ2ps9Qw3YzXsTeIqrMWzcLtnaMlaHlDrPVtreYBIdqwtaV8W7caSd4vdPqzatMtILN7lolmR4kKKf2GKZF10Z0khC2NYQwdc3eXUo8RZ7/Ki9HtGolOCrDoCj5nvCTv0JTOIlSLHgP+nx54lwKp51JwbAtOz0Iux7wEGWC0rxa7zX0f/vqCShV7WLUXbKXUsu6r6nF43vmpY9RoP8JlKNVYoWAMzVC0n1PRIM2tllc5lZNVrqyaXub6MrDXr6pnKmmU+82OSW7LQW3xtTOOqgbV+YT0SGvZrMst+HlzKVXbJLPAFMiTyuarI2q6xTC9+iqytKuse8QxTYqFvrWAR50aJtc2Y9UwunVJIrE2foXzWJLDQNybRSDUvsNZakS5FesVfYG05PMy5cqz3jVnSvCiV/BZrmo9U0rWexOJ29rqE3Vm6UJDnxDiui3z1RXMfDXGWncmeeM+xjJumPLRRntjO2+HYX4u6bLKsiUurhc0H7m3STd92GNoi6vpkrDTIsBrnP54WbXo4xTOnOcel6koWO0g6nsoJGJ8nYjb/SvxWlqevv3M6TZ+aPpPdM1PuH4MO6n/1P4VXj2ch8SwknoXEs5B4FhLPQuJZSDwLiWch8SwknoXkD8u9VfMkSqs3AAAAAElFTkSuQmCC"></img>
                  <div class="float-left mt-8 ml-4">
                  <h3 class="font-bold">Sukhchain Singh</h3>
                  <p>"Got Placed as a CRO!"</p>
                </div>
                <p class="clear-left text-md ml-6 pt-2">Hello, I'm Sukhchain Singh. I'm currently working at TAFE TRACTOR as CRO. I</p>
                <p class="text-md ml-6">really thank the Refier Team for helping me achieve the success that I've</p>
                <p class="text-md ml-6">achieved so far in my relatively short career. This is because of the mentoring</p>
                <p class="text-md ml-6">and training I got from Refier. Thank You</p>
                </div>


          </div>
         <div class="border bg-black" style={{height:500}}>
             <div class="text-white float-left">
                 <h1 class="font-bold text-3xl ml-32 mt-16">ReFier</h1>
                 <p class="ml-32 mt-8">Plot-76 D, Udyog Vihar, Phase-4, Section-18,</p>
                 <p class="ml-32 ">Gurugram, Haryana, India - 122001</p>
                 <AiOutlineInstagram class="ml-32 mt-4 inline" size={30}/>
                 <RiFacebookFill class="ml-10 mt-4 inline" size={30}/>
                 <AiOutlineTwitter class="ml-10 mt-4 inline" size={30}/>
                 <AiFillLinkedin class="ml-10 mt-4 inline" size={30}/>
                 <AiFillYoutube class="ml-10 mt-4 inline" size={30}/>
                 <p class="ml-32 mt-4">Sign up for job alerts</p>
                 <input type="email" placeholder='Your Email Address' class="border bg-black text-white ml-32 mt-4 p-2 w-52"></input>
                 <button class="border p-2 w-28">Submit</button>
                 
             </div>
             <div class="float-left mt-16 ml-32 text-white">
                 <h1 class="text-xl font-bold">Discover</h1>
                 <ul class="mt-6">
                     <li>Jobs</li>
                     <li>Jobseeker</li>
                     <li>College</li>
                     <li>Enterprise</li>
                     <li>Blog</li>
                     <li>ISA</li>
                     <li>Newsletter</li>
                     
                 </ul>

             </div>
              <div class="float-left mt-16 ml-32 text-white">
                 <h1 class="text-xl font-bold">Company</h1>
                 <ul class="mt-6">
                     <li>Contact Us</li>
                     <li>About Us</li>
                     </ul>
                 </div>
                 <div class="float-left mt-16 ml-32 text-white">
                 <h1 class="text-xl font-bold">Contact</h1>
                 <ul class="mt-6">
                     <li>+91-8790909745</li>
                     <li>info@refi.com</li>
                     </ul>
                 </div>
                 <div class="clear-left relative top-16 text-white">
                     <hr class="ml-32 mr-24"></hr>
                     <div class="float-left">
                     <p class="ml-32 mt-4">Copyrights © 2021 All Rights Reserved by</p>
                     <p class="ml-32">Refassist Solutions Pvt Ltd</p>
                     </div>
                     <div class="float-left text-white ml-72 mt-8">
                         <p class="border border-l-0 pt-4 pb-4 pr-6 border-t-0 border-b-0 inline">Privacy Policy</p>
                         <p class="border border-l-0 pr-10 pt-4 pb-4 border-t-0 ml-10 border-b-0 inline">Terms</p>
                         <p class="inline ml-10">Sitemap</p>
                    </div>

                 </div>


         </div>
         <div id="reg" class="border border-gray-300 drop-shadow-2xl bg-white absolute top-0 invisible" style={{width:200,height:110,position:"absolute",left:1050,top:73}}>
             <a href="./login" class="text-lg font-bold relative top-4 left-4">As a Student</a><br></br>
             <a href="./enterprise" class="text-lg font-bold relative top-8 left-4">As an Enterprise</a>

         </div>
        
        
      </div>
  );
}
