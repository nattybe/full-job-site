import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './comp.css'
import {
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function SingleItem() {
  return (
    <div className="text-text btn-shadow p-4 rounded-lg">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">Branch Cashier | Full Time</h2>
        <FontAwesomeIcon icon={faShareFromSquare}/>
      </div>
      <p className="text-md mt-2">
        JOB REQUIREMENT Education: First Degree in Accounting / Banking /
        Management Experience: 2 years of...
      </p>
      <div className="flex justify-between items-end mt-4">
        <span className="text-sm">harmejobs</span>
        <span className="text-sm">November 15, 2023</span>
      </div>
    </div>
  );
}
