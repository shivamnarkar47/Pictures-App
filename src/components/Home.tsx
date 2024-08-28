import BlurIn from "@/components/magicui/blur-in"
import { useState } from "react"
import Searchbar from "./Searchbar"
const Home = () => {
  const [search,setSearch] = useState("");
  console.log(search)
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-10">
          {/* <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">Search for photos</h1> */}
      <BlurIn word={"Search Photos"}></BlurIn>
      <Searchbar setSearch={setSearch} search={search}/>
          
        <div>Made with ❤️  by Shivam Narkar</div>

        </div>
  )
}

export default Home
