import FrontPage from "@/components/frontPage";
import SearchBar from "@/components/searchBar";
export default async function Home() {
  // const jobs=await getFromDB()
  return (
      <main className="py-4">
        <SearchBar />
        <FrontPage />
      </main>
  );
}
