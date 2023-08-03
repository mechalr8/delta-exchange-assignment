import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddMember = () => {
  const { show } = useSelector((state) => state.custom);

  const dispatch = useDispatch();

  const getShow = (showModal) => {
    dispatch({
      type: "setShow",
      payload: showModal,
    });
  };

  const openAddMemberModal = () => {
    if (!show) {
      getShow(!show);
    }
  };
  
  return (
    <div>
      <button className='btn btn-dark' onClick={openAddMemberModal}>
        Add Members +
      </button>
    </div>
  );
};

export default AddMember;
