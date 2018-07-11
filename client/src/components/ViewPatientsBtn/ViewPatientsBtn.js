import React from "react";
import "./ViewPatientsBtn.css";

const ViewPatientsBtn = () => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/patients/view')}>View</button>
);

export default ViewPatientsBtn

    