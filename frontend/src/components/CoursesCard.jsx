import React from "react";
import logo from "../assets/MongoDB-logo.svg";
import { useNavigate } from "react-router-dom";


const CoursesCard = ({CourseData }) => {
  const navigate = useNavigate();

  const courseDetails = (event) => {
    navigate(`/courses/details`);
  };
  return (
    <>
      {CourseData.map((course)=>(
      <div key={course.id} className="w-96 h-96 rounded-2xl  m-4 bg-slate-900">
        <div className="w-full h-1/3 p-2">
          <img src={course.course_thumbnail} alt="" className="w-full h-full" />
        </div>
        <div className="w-full h-9 pl-4 pr-4">
          <h2 className="font-sans font-bold text-2xl text-white">{course.course_Title}</h2>
        </div>
        <div className="w-full h-40 pl-4 pr-4">
          <p className="font-sans font-semibold text-white">
            {course.course_Des}
          </p>
        </div>
        <div className="w-full h-9 pl-4 pr-4">
          <button
            onClick={courseDetails}
            className="p-2 bg-blue-600 rounded-lg w-30 h-10 mr-6 font-semibold text-white"
          >
            Courses Details
          </button>
          <button
            onClick={courseDetails}
            className="p-2 bg-blue-600 rounded-lg w-30 h-10 font-semibold text-white"
          >
            Buy Course
          </button>
        </div>
      </div>
      ))};
    </>
  );
};

export default CoursesCard