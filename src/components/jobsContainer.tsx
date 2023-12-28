"use client";
import React, { useContext } from "react";
import SingleItem from "./item";
import { SearchContext } from "@/context/jobsContext";

export default function JobsContainer() {
  const { searchResult } = useContext(SearchContext);
    
  return (
    <div className="container flex flex-col gap-2 py-2 px-2">
      {searchResult?.jobs ? (
        <p className="text-text">
          Showing {searchResult?.jobs?.length} results out of{" "}
          {searchResult?.estimatedSearchResult}
        </p>
      ) : (
        ""
      )}
      {searchResult?.jobs?.length === 0 ? (
        <h1 className="text-primary text-center py-4 text-4xl">No Result</h1>
      ) : (
        ""
      )}
      {searchResult?.jobs?.map((job) => (
        <SingleItem key={job._id} job={job} />
      ))}
    </div>
  );
}
