"use client";
import React, { FunctionComponent, Key, useEffect, useState } from "react";
import { getFeaturedJobs, getForFresh, getNewJobs } from "@/lib/getFrontPageData";
import SingleItem from "./item";

export default function FrontPage() {
  const [data, setData] = useState();
  const [choice, setChoice] = useState("Featured");
  // const data = await getFeaturedJobs();
  const toggleTabs =(tabId:string)=>{
    const tabs = document.querySelectorAll(".tab") as NodeListOf<HTMLElement>;

    tabs.forEach((tab) => {
      // const id = parseInt(tab.dataset.id || "", 10);

      if (tab?.id===tabId) {
        // tab.classList.toggle("active");
        tab.setAttribute('active', '')
      } else {
        // tab.classList.remove("active");
        tab.setAttribute('active', 'false');
      }
    });
  }
   useEffect(() => {
    const getsa = async () => {
      // alert(choice);
      if (choice === "Featured") {
        setData(await getFeaturedJobs());
      } else if (choice === "Todays") {
        setData(await getNewJobs());
      } else if (choice === "For Fresh") {
        setData(await getForFresh());
      }
    };
    getsa();
  }, [choice]);

  type TabProps = {
    text: string;
    active?: boolean;
    disabled?: boolean;
    link: string;
  };

  const Tab: FunctionComponent<TabProps> = ({
    text,
    active,
    disabled,
    link,
  }) => {
    return (
      <li className="me-2">
        <a
          href={link}
          onClick={() => {
            toggleTabs(text)
            setChoice(text)
          }}
          id={text}
          className={
            "tab inline-block p-4 border-b-2 text-nowrap rounded-t-lg hover:text-gray-600 hover:border-gray-300 " +
            (active
              ? "active text-accent border-accent border-b-2"
              : "border-transparent") +
            (disabled
              ? "cursor-not-allowed text-secondary border-transparent"
              : "border-transparent")
          }
        >
          {text}
        </a>
      </li>
    );
  };
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex overflow-auto -mb-px">
          <Tab text="Featured" link="#featured jobs" />
          <Tab text="Todays" link="#today's job" />
          <Tab text="For Fresh" link="#for fresh students" />
        </ul>
      </div>
      <div className="">
        <div className="container flex flex-col gap-2 py-2 px-2 gap-2">
          {data?.jobs.map((job: jobType) => (
            <SingleItem job={job} key={job.id as Key} />
          ))}
        </div>
      </div>
    </>
  );
}
