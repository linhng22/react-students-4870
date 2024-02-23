import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../data/config";
import { useParams } from "react-router-dom";

const UpdateStudentForm = (props) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [school, setSchool] = useState(props.school);
  const Navigate = useNavigate();

  //update student
  const updateStudent = () => {
    const result = fetch(`${CONSTANTS.BASE_API_URL}students/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        studentId: id,
        firstName: firstName,
        lastName: lastName,
        school: school,
      }),
      headers: { "Content-Type": "application/json" },
    });
    result
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    Navigate(`/detail/${id}`, { state: { refresh: true } });
  };

  return (
    <React.Fragment>
      <div className="panel panel-default">
        <form>
          <h3>Update Student</h3>
          <div className="form-group">
            <label>First Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder={props.firstName}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder={props.lastName}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>School:</label>
            <input
              className="form-control"
              type="text"
              placeholder={props.school}
              value={school}
              onChange={(event) => setSchool(event.target.value)}
            />
          </div>

          <input
            type="submit"
            onClick={() => updateStudent()}
            className="btn btn-success"
            value="Update"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default UpdateStudentForm;
