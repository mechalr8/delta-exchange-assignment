import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
// import TeamMembers from "./TeamMembers";

const Modal = () => {
  const { show, teamMembers } = useSelector((state) => state.custom);

  const dispatch = useDispatch();

  const [name, setName] = useState()
  const [company, setCompany] = useState()
  const [status, setStatus] = useState()
  const [notes, setNotes] = useState()  

  const getShow = (notShowing) => {
    dispatch({
      type: "setShow",
      payload: notShowing,
    });
  };

  const getTeamMembers = (tM) => {
    dispatch({
      type: "setTeamMembers",
      payload: tM,
    });
  };

  const addMemberHandler = () => {
    let tm = [...teamMembers]
    const newTeamMember = {
      id: Date.now(),
      name,
      company,
      status,
      lastUpdated: new Date().toLocaleDateString(),
      notes
    }
    tm.push(newTeamMember);
    getTeamMembers(tm);
    closeModalHandler()
  }

  const closeModalHandler = () => {
    if (show) getShow(!show);
  };

  if (!show) {
    return null;
  }
  return (
    <div className='modal' onClick={closeModalHandler}>
      <div
        className='modal-content text-decor'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-close' onClick={closeModalHandler}>
          ⤫
        </div>
        <h3>Add Members</h3>
        <div className='modal-body'>
          <label className='input-labels'>Name:</label>
          <input
            className='input-fields'
            type='text'
            value={name || ""}
            onChange={(event) => setName(event.target.value)}
          />
          <label className='input-labels'>Company:</label>
          <input
            className='input-fields'
            type='text'
            value={company || ""}
            onChange={(event) => setCompany(event.target.value)}
          />
          <label className='input-labels'>Status:</label>
          <input
            className='input-fields'
            type='text'
            value={status || ""}
            onChange={(event) => setStatus(event.target.value)}
          />
          <label className='input-labels'>Notes:</label>
          <input
            className='input-fields'
            type='text'
            value={notes || ""}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
        <div className='modal-footer'>
          <button className='btn btn-light' onClick={closeModalHandler}>
            Cancel
          </button>
          <button className='btn btn-dark' onClick={addMemberHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
