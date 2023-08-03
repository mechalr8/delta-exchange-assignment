import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  teamMembers: [
    {
        id: 1,
      name: "Wayne Rooney",
      company: "DC United",
      status: "Active",
      lastUpdated: "7/07/2023",
      notes: "ManUtd Highest Scorer",
    },
    {
        id: 2,
      name: "Ryan Giggs",
      company: "Manchester United",
      status: "Closed",
      lastUpdated: "3/08/2011",
      notes: "Most Matches Played",
    },
    {
        id: 3,
      name: "Zlatan Ibrahmovic",
      company: "LA Galaxy",
      status: "Active",
      lastUpdated: "3/09/2018",
      notes: "I am 'ZLATAN'",
    },
  ],
  showTeamMembers: [],
  status: "",
  companies: [],
  show: false,
  selectedCompanies: [],
};

export const customReducer = createReducer(initialState, {
  setTeamMembers: (state, action) => {
    state.teamMembers = [...action.payload]
  },
  setShowTeamMembers: (state, action) => {
    state.showTeamMembers = Array.from(
      new Set([...action.payload].map(JSON.stringify))
    ).map(JSON.parse);
  },
  setStatus: (state, action) => {
    state.status = action.payload;
  },
  setCompanies: (state, action) => {
    state.companies = [...action.payload]
    // Array.from(
    //   new Set([...action.payload])
    // );
  },
  setShow: (state, action) => {
    state.show = action.payload;
  },
  setSelectedCompanies: (state, action) => {
    state.selectedCompanies = Array.from(new Set(([...action.payload])));
  },
});
