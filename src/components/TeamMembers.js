import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyFilter from "./CompanyFilter";
import StatusSort from "./StatusSort";
import TeamMember from "./TeamMember";

const TeamMembers = () => {
  const { showTeamMembers, teamMembers} = useSelector(
    (state) => state.custom
  );

  const dispatch = useDispatch();

  const getCompanies = useCallback((companies) => {
    dispatch({
      type: "setCompanies",
      payload: companies,
    });
  }, [dispatch]);

  useEffect(() => {
    let comp = Array.from(
      new Set(teamMembers.map((teamMember) => ({name: teamMember.company})))
    );
    getCompanies(comp);
  }, [getCompanies, teamMembers]);

  return (
    <div className='team-members'>
      <div className='filters'>
        <CompanyFilter />
        <StatusSort />
      </div>
      <div className='team-members-table'>
        <table>
          <thead>
            <tr>
              <th style={{ width: "3%" }}>
                <input type='checkbox' />
              </th>
              <th style={{ width: "15%" }}>Name</th>
              <th style={{ width: "15%" }}>Company</th>
              <th style={{ width: "5%" }}>Status</th>
              <th style={{ width: "10%" }}>Last Updated</th>
              <th style={{ width: "20%" }}>Notes</th>
              <th style={{ width: "5%" }}></th>
              <th
                style={{ width: "2%"}}
              ></th>
            </tr>
          </thead>
          <tbody>
            {showTeamMembers.map((teamMember, id) => {
              return <TeamMember teamMember={teamMember} key={id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembers;
