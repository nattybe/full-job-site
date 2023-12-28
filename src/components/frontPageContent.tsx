 
import { getFeaturedJobs } from '@/lib/getFrontPageData';
import React from 'react'
import SingleItem from './item';

export default async function FrontPageContent() {
    const data = await getFeaturedJobs();
    console.warn("from Data",data);
    
  return (
    <div className="container flex flex-col gap-2 py-2 px-2 gap-2">
      {data?.jobs.map((job: jobType) => (
        <SingleItem job={job} key={job.id} />
      ))}
    </div>
  );
}