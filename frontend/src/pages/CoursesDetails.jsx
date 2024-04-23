import React from "react";
import Footer from "../components/Footer";
import LoginNavbar from "../components/LoginNavbar";

const CoursesDetails = () => {
  return (
    <>
      <LoginNavbar />
      <div className="w-full h-full mt-5 mb-5 flex justify-center items-center">
        <div className="w-4/5 h-auto">
          <div className="w-full h-20">
            <h1 className="text-5xl font-bold text-red-700">Course Title</h1>
          </div>
          <div className="w-full h-96">
            <p>
              Java is a high-level, versatile, and widely used programming
              language known for its portability, performance, and security. A
              Java course typically introduces students to the fundamentals of
              the language and covers a variety of concepts and topics,
              including: Introduction to Java: The course begins with an
              overview of the language's history and its main features, such as
              platform independence, object-oriented programming, and automatic
              memory management. Java Development Environment: Students learn
              how to set up and configure a Java development environment,
              including installing the Java Development Kit (JDK) and an
              Integrated Development Environment (IDE) like Eclipse or IntelliJ.
            </p>
            <h2 className="text-2xl font-bold">Courses Details</h2>
            <ul className="">
              <li>Features 1</li>
              <li>Features 2</li>
              <li>Features 3</li>
            </ul>
          </div>
          <div className="w-full h-96">
            <button className="p-3 bg-blue-700 text-white mr-4 w- rounded-lg hover:bg-indigo-900">
              Buy Course
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesDetails;
