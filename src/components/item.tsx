import React, { ReactPropTypes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./comp.css";
import { faSave, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SingleItem(props: ReactPropTypes) {
  const job:jobType = props.job;
  return (
    <Link
      href={job.url}
      target="_blank"
      className="text-text btn-shadow p-4 rounded-lg"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <FontAwesomeIcon
          icon={faSave}
          onClick={(event) => {
            event.preventDefault();
            alert(job.url);
          }}
          className="text-4xl"
        />
      </div>
      <p className="text-md mt-2 text-pretty">{job.content}</p>
      <div className="flex justify-between items-end mt-4">
        <span className="text-sm">{job.from}</span>
        <span className="text-sm">{job.date}</span>
      </div>
    </Link>
  );
}
