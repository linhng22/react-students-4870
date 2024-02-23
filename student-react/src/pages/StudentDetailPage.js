import React from "react";
import { useParams } from "react-router-dom";
// import students from "../data/students";
import StudentList from "../components/StudentList";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";
import CONSTANTS from "../data/config";
import AddStudentForm from "../components/AddStudentForm";
import UpdateStudentForm from "../components/UpdateStudentForm";
import DeleteStudentForm from "../components/DeleteStudentForm";

const StudentDetailPage = () => {
  //any JS code goes here
  const { id } = useParams();
  //   const student = students.find((data) => data.studentId === Number(id));

  const [studentInfo, setStudentInfo] = useState({
    FirstName: "",
    LastName: "",
    School: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${CONSTANTS.BASE_API_URL}students/${id}`);
      const body = await result.json();
      setStudentInfo(body);
    };
    fetchData();
  }, [id]);

  //   if (!student) return <NotFoundPage />;
  if (!studentInfo) return <NotFoundPage />;

  return (
    <React.Fragment>
      <div style={{ width: "20%", float: "right" }}>
        <h3>Others:</h3>
        {/* <StudentList exceptId={student.studentId} /> */}
        <StudentList exceptId={studentInfo.StudentId} />
      </div>

      {/* <h4 className="text-danger">Student ID={student.studentId}</h4> */}
      <h4 className="text-danger">Student ID={studentInfo.StudentId}</h4>
      <p>
        <b>Name: </b>
        {/* {student.firstName} {student.lastName} */}
        {studentInfo.FirstName} {studentInfo.LastName}
      </p>
      <p>
        <b>School: </b>
        {/* {student.school} */}
        {studentInfo.School}
      </p>

      <div style={{ width: "50%", float: "left" }}>
        <DeleteStudentForm />
        <br />
        <AddStudentForm />
        <br />
        <UpdateStudentForm
          firstName={studentInfo.firstName}
          lastName={studentInfo.lastName}
          school={studentInfo.school}
        />
      </div>
    </React.Fragment>
  );
};
export default StudentDetailPage;
