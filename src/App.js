import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Enterprise from './components/Enterprise';
import Login from './components/Login';
import Page from './components/Page';
import Student from './components/Student';

export default function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Page/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/student" element={<Student/>}></Route>
     <Route path="/enterprise" element={<Enterprise/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}
