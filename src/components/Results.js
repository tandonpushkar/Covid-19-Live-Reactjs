import React from "react";

import Official from "./Official";
import UnOfficial from "./UnOfficial";

const CoronaList = ({ OfficialResults, UnOfficialResults, loading }) => {
  return (
    <div className="App">
      <div style={{ padding: 30 }} />
      <h3>Update in every 15 seconds </h3>
      <h3>Sourced from The Ministry of Health and Family Welfare : </h3>
      <Official OfficialResults={OfficialResults} loading={loading} />
      <h3>Unofficial sources : </h3>
      <UnOfficial UnOfficialResults={UnOfficialResults} loading={loading} />
      <div style={{ padding: 30 }} />
    </div>
  );
};

export default CoronaList;
