import getFromDB from "@/lib/getFromDB";

const GradientCard = (param) => {
    const job=param.job;
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{job.title}</div>
        <p className="text-gray-200 text-base">
          This is a beautiful gradient card with a curved edge created using
          Tailwind CSS.
        </p>
      </div>
      <div className="bg-white p-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tailwind
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Gradient
        </span>
      </div>
    </div>
  );
};
export default async function Jobs() {
  const jobs = await getFromDB();
  const content=jobs?.map(job=>{
    console.log(job);
    return(
      <GradientCard job={job} key={job.id}/>
    )
  })
  return (
    <div className="flex items-center justify-between min-h-screen">
      <h1>Got {jobs?.length} of em</h1>
      {content}
    </div>
  );
}
