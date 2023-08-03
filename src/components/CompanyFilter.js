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

    const getCompanies = (comp) => {
        dispatch({
          type: "setCompanies",
          payload: comp,
        });
    }

    useEffect(() => {
        let tM = [];
        if(selectedCompanies.length>0){
            tM = teamMembers.filter((teamMember) => (selectedCompanies.includes(teamMember.company)))
            getShowTeamMembers(tM);
        } else {
            getShowTeamMembers(teamMembers)
        }
    }, [getShowTeamMembers, selectedCompanies, teamMembers])

    // let comp = [...selectedCompanies];

    // const handleSubCheckboxChange = (e, company) => {
    //     if(e.target.checked){
    //         comp.push(company)
    //         getSelectedCompanies(comp);
    //     }else{
    //         comp = Array.from(new Set(comp.filter((it) => it !== company)))
    //         getSelectedCompanies(comp);
    //     }
    // }

    let tempSelectedComp = [...selectedCompanies]

    const handleChange = (e) => {
        const { name, checked } = e.target;
        let tempComp = companies.map((company) =>
            name === "allSelect" || company.name === name
            ? { ...company, isChecked: checked }
            : company
        );
        let updatedSelectedComp;
        if (name === "allSelect") {
            updatedSelectedComp = checked
            ? companies.map((company) => company.name)
            : [];
        } else {
            const tempSelectedSet = new Set(tempSelectedComp);
            checked ? tempSelectedSet.add(name) : tempSelectedSet.delete(name);
            updatedSelectedComp = Array.from(tempSelectedSet);
        }
        getSelectedCompanies(updatedSelectedComp);
        getCompanies(tempComp);
    };

    // Later in your component:
    // let tempSelectedComp = [...selectedCompanies];


    return (
      <div className='dropdown'>
        <span>Company({selectedCompanies.length})</span>
        <div className='dropdown-content'>
          <div>
            <input
              type='checkbox'
              name='allSelect'
              checked={companies.filter((company) => company?.isChecked !== true).length < 1}
              onChange={handleChange}
            />
            <span>Select All</span>
          </div>
          {companies.map((company) => {
            return (
              <div key={company.name}>
                <input
                  type='checkbox'
                  name={company.name}
                  checked={company.isChecked || false}
                  onChange={handleChange}
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




