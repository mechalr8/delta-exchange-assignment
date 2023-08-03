import React, {useCallback, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

const CompanyFilter = () => {
    const { companies, selectedCompanies, teamMembers } = useSelector((state) => state.custom);

    const dispatch = useDispatch();

    const getSelectedCompanies = (company) => {
        dispatch({
            type: "setSelectedCompanies",
            payload: company,
        });
    }

    const getShowTeamMembers = useCallback(
        (teamMembers) => {
            dispatch({
                type: "setShowTeamMembers",
                payload: teamMembers,
            });
        },
        [dispatch]
    );

    useEffect(() => {
        let tM = [];
        if(selectedCompanies.length>0){
            tM = teamMembers.filter((teamMember) => (selectedCompanies.includes(teamMember.company)))
            getShowTeamMembers(tM);
        } else {
            getShowTeamMembers(teamMembers)
        }
    }, [getShowTeamMembers, selectedCompanies, teamMembers])

    let comp = [...selectedCompanies];

    const handleSubCheckboxChange = (e, company) => {
        if(e.target.checked){
            comp.push(company)
            getSelectedCompanies(comp);
        }else{
            comp = Array.from(new Set(comp.filter((it) => it !== company)))
            getSelectedCompanies(comp);
        }
    }

    const handleMasterCheckboxChange = (e) => {
        if(e.target.checked){
            
        }
    }

    return (
      <div className='dropdown'>
        <span>Company({selectedCompanies.length})</span>
        <div className='dropdown-content'>
          <div>
            <input
              type='checkbox'
              onChange={(event) => handleMasterCheckboxChange(event)}
            />
            <span>Select All</span>
          </div>
          {companies.map((company) => {
            return (
              <div key={company.name}>
                <input
                  type='checkbox'
                //   onChange={(event) => handleSubCheckboxChange(event, company)}
                />
                <span>{company.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default CompanyFilter
