import React from "react";
import { Link } from "react-router-dom";
// import students from "../data/students.js.not-used";
import { useState, useEffect } from "react";
import CONSTANTS from "../data/config";

const StudentList = (param) => {
  // let filteredStudents = students;

  // //filter out the student with the exceptId
  // if (param.exceptId !== undefined) {
  //   filteredStudents = students.filter((p) => p.studentId !== param.exceptId);
  // }

  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${CONSTANTS.BASE_API_URL}students/`);
      const body = await result.json();
      setStudentInfo(body);
    };
    fetchData();
  }, []);

  var filteredStudents = studentInfo;

  if (param !== undefined) {
    filteredStudents = Object.values(studentInfo).filter(
      (p) => p.studentId !== +param.exceptId
    );
  }

  return (
    <>
      {filteredStudents.map((student, key) => (
        <Link key={key} to={`/detail/${student.StudentId}`}>
          <h6>
            {student.StudentId} {student.FirstName} {student.LastName}
          </h6>
        </Link>
      ))}
    </>
  );
};
export default StudentList;
