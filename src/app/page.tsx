import JobsContainer from "@/components/jobsContainer";
import SearchBar from "@/components/searchBar";
import getFromDB from "@/lib/getFromDB";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const jobs=await getFromDB()
  return (
    <main className="py-4">
      <SearchBar />
      <JobsContainer />
    </main>
  );
}
