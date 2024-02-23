import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../data/config";
import { useParams } from "react-router-dom";

const DeleteStudentForm = () => {
  const { id } = useParams();
  const Navigate = useNavigate();

  //delete student
  const deleteStudent = () => {
    const result = fetch(`${CONSTANTS.BASE_API_URL}students/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    result
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));

    Navigate(`/list`, { state: { refresh: true } });
  };

  return (
    <React.Fragment>
      <div className="panel panel-default">
        <form>
          <h3>Delete Student</h3>

          <input
            type="submit"
            onClick={() => deleteStudent()}
            className="btn btn-danger"
            value="Delete"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default DeleteStudentForm;
