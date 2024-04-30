import React from "react";
import Login from "./pages/Login";
import RegisterFaculty from "./pages/RegisterFaculty";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import RegisterStudent from "./pages/RegisterStudent";
import Student from "./pages/Student";
import CoursesPlay from "./pages/CoursesPlay";
import LoginHome from "./pages/LoginHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesDetails from "./pages/CoursesDetails";
import LoginFaculty from "./pages/LoginFaculty";
import MentorFaculty from "./pages/MentorFaculty";
import InformationPageFaculty from "./pages/InformationPageFaculty";
import LaunchCourseForms from "./pages/LaunchCourseForms";
import LaunchBookForms from "./pages/LaunchBookForms";
import LaunchArticals from "./pages/LaunchArticals";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/student/register" element={ <RegisterStudent />}/>
        <Route path="/faculty/register" element={ <RegisterFaculty />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/faculty" element={<LoginFaculty/>}/>
        <Route path="/home" element={<LoginHome />}/>
        <Route path="/faculty" element={<MentorFaculty />}/>
        <Route path="/profile" element={<Student />} />
        <Route path="/courses/details" element={<CoursesDetails />} />
        <Route path="/courses/play" element={<CoursesPlay />} />
        <Route path="/facultyMentor" element={<LaunchArticals />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;


