import React, { useCallback, useEffect, useState } from "react";
import css from "./Candidate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCandidate } from "../../../redux/candidate/candidate.reducer";
import FormCandidate from "../../../components/FormCandidate";
import Pagination from "../../../components/Pagination";

const Candidate = () => {
  const [showForm, setShowForm] = useState(false);
  const [listCandidate, setListCandidate] = useState([]);
  const dispatch = useDispatch();
  const { candidate } = useSelector((state) => state.candidate);

  useEffect(() => {
    dispatch(getCandidate());
  }, [dispatch]);

  useEffect(() => {
    setListCandidate(candidate?.content);
  }, [candidate]);

  const renderListCandidate = useCallback(() => {
    return (
      listCandidate &&
      listCandidate.map((candidate, index) => {
        const dateOfBirth = new Date(candidate.dateOfBirth).toLocaleDateString(
          "en-US"
        );
        return (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{candidate.name}</td>
            <td>{candidate.jobHistory}</td>
            <td>{candidate.skill}</td>
            <td>{candidate.address}</td>
            <td>{dateOfBirth}</td>
            <td className={css.control}></td>
          </tr>
        );
      })
    );
  }, [listCandidate]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          toggleForm();
        }}
      >
        Add Candidate
      </button>
      {showForm && <FormCandidate setShowForm={setShowForm} />}
      <div className={css.main}>
        <table className="col-md-10 table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Finished</th>
              <th scope="col">Created By</th>
              <th scope="col">Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderListCandidate()}</tbody>
        </table>
        <Pagination count={listCandidate?.count} />
      </div>
    </>
  );
};

export default Candidate;
