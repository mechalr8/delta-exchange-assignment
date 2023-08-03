import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TeamMember = ({teamMember}) => {
  const { teamMembers } = useSelector((state) => state.custom);
  const dispatch = useDispatch();

  const getTeamMembers = (tM) => {
    dispatch({
      type: "setTeamMembers",
      payload: tM,
    });
  };

  const deleteTeamMemberHandler = (id) => {
    let tM = [...teamMembers.filter((teamMember) => teamMember.id !== id)];
    getTeamMembers(tM);
  }

  return (
    <tr key={teamMember.id}>
      <td>
        <input type='checkbox' />
      </td>
      <td>{teamMember.name}</td>
      <td>{teamMember.company}</td>
      <td>{teamMember.status}</td>
      <td>{teamMember.lastUpdated}</td>
      <td>{teamMember.notes}</td>
      <td>
        <span onClick={() => deleteTeamMemberHandler(teamMember.id)}>🗑️</span>
      </td>
      <td></td>
    </tr>
  );
}

export default TeamMember
