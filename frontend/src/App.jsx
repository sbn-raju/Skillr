import React from "react";
import Login from "./pages/Login";
import RegisterFaculty from "./pages/RegisterFaculty";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import RegisterStudent from "./pages/RegisterStudent";
import Student from "./pages/Student";
// import CoursesPlay from "./pages/CoursesPlay";
import LoginHome from "./pages/LoginHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesDetails from "./pages/CoursesDetails";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/student/register" element={ <RegisterStudent />}/>
        <Route path="/faculty/register" element={ <RegisterFaculty />}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<LoginHome />}/>
        <Route path="/faculty" element={<Faculty />}/>
        <Route path="/profile" element={<Student />} />
        <Route path="/courses/details" element={<CoursesDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './components/signup';
// import Login from './components/login';
// import Home from './components/home';
// import About from './components/about';
// import Profile from './components/profile';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />}></Route>
//         <Route path="/register" element={<Signup />}></Route>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
