import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const StatusSort = () => {
  const { showTeamMembers } = useSelector((state) => state.custom);

  const [sortAsc, setSortAsc] = useState(false);
  const [sortDesc, setSortDesc] = useState(false);

  const dispatch = useDispatch();

  const compareIncreasing = (a, b) => {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    return 0;
  };

  const compareDecreasing = (a, b) => {
    if (a.status < b.status) return 1;
    if (a.status > b.status) return -1;
    return 0;
  };

  const sortTeamMembers = () => {
    let tM = [];
    if (!sortAsc && !sortDesc) {
        tM = [...showTeamMembers].sort(compareIncreasing);
        setSortAsc(!sortAsc);
    } else if (!sortAsc && sortDesc){
        tM = [...showTeamMembers].sort(compareIncreasing);
        setSortAsc(!sortAsc);
        setSortDesc(!sortDesc)
    } else {
        tM = [...showTeamMembers].sort(compareDecreasing)
        setSortDesc(!sortDesc)
        setSortAsc(!sortAsc)
    }
    getShowTeamMembers(tM);
  };

  const getShowTeamMembers = useCallback(
    (teamMembers) => {
      dispatch({
        type: "setShowTeamMembers",
        payload: teamMembers,
      });
    },
    [dispatch]
  );

  return (
    <div className="sort" onClick={sortTeamMembers}>
        <span>Status </span>
      {(() => {
        if (!sortAsc && !sortDesc) {
          return <span className="arrow">˅</span>;
        } else if (!sortAsc && sortDesc) {
          return <span className="arrow">˅</span>;
        } else {
          return <span className='arrow'>˄</span>;
        }
      })()}
    </div>
  );
};

export default StatusSort;