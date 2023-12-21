import React from "react";
export default function Jobs() {
  return (
    <>
      <div className="bg-teal-700 text-white p-4">
        {/* <!-- Top bar with icons --> */}
       

        {/* <!-- Banner --> */}
        <div
          className="bg-cover bg-center h-64" /* style="background-image: url('city-skyline.jpg')" */
        >
          <h1 className="text-2xl">Find your dream job</h1>
          <p className="text-sm">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </div>

        {/* <!-- Search bar --> */}
        <input
          className="w-full px-3 py-2 my-4 bg-white rounded"
          type="text"
          placeholder="Search jobs"
        />

        {/* <!-- Job postings --> */}
        <div className="space-y-4 bg-gray-800 text-white p-4 rounded">
          <div className="p-4 bg-white text-black rounded">
            <h2 className="text-xl">Branch Cashier | Full Time</h2>
            <p className="text-sm">Posted by harmejobs on November 15, 2023</p>
          </div>
          {/* <!-- More job postings... --> */}
        </div>

        {/* <!-- Footer --> */}
        <div className="text-center text-sm mt-4">© 2023 Beautiful Theme</div>
      </div>
    </>
  );
}
