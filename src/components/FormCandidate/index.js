import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import { useDispatch } from "react-redux";
import {
  createCandidate,
  getCandidate,
} from "../../redux/candidate/candidate.reducer";

const FormTodo = ({ todo, setShowForm }) => {
  const [candidateName, setCandidateName] = useState("");
  const [skill, setSkill] = useState("React");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [jobHistory, setJobHistory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(
      createCandidate({
        name: candidateName,
        skill,
        address,
        dateOfBirth: new Date(dateOfBirth),
        jobHistory,
      })
    );
    setShowForm(false);
    window.location.reload();
  };

  useEffect(() => {
    if (todo) {
      setCandidateName(todo.title);
      setSkill(todo.is_finished);
    } else {
      setCandidateName("");
      setSkill(false);
    }
  }, [todo]);

  return (
    <div className={css.form}>
      <form style={{ width: 500 }}>
        <div className="form-group">
          <label htmlFor="candidateName">Name</label>

          <input
            className="form-control"
            value={candidateName}
            type={"text"}
            id={"candidateName"}
            name={"candidateName"}
            onChange={(e) => setCandidateName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>

          <input
            className="form-control"
            value={address}
            type={"text"}
            id={"address"}
            name={"address"}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <label for="start">Start date:</label>

          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            min="2018-01-01"
            max="2018-12-31"
            className="form-control"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobHistory">Job History</label>

          <input
            className="form-control"
            value={jobHistory}
            type={"text"}
            id={"jobHistory"}
            name={"jobHistory"}
            onChange={(e) => setJobHistory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skill">Skill</label>
          <select
            id="skill"
            className="form-control"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          >
            <option value="Java">Java</option>
            <option value="React">React</option>
            <option value="Flutter">Flutter</option>
          </select>
        </div>

        <div className={css["control-btn"]}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
