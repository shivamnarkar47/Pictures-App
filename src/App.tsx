import { Heart } from "lucide-react"
import { ModeToggle } from "./components/mode-toggle"
import { Outlet, Link, useLocation } from "react-router-dom"
import Searchbar from "./components/Searchbar";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [search,setSearch] = useState('');
  console.log(location.pathname)
  return (
    <>
      <div className="h-screen p-10">
        <nav className="flex w-full justify-between items-center">
          <Link to={'/'}>
            <Heart />
          </Link>
          {location.pathname != "/" && <Searchbar setSearch={setSearch} search={search}/>}
          <ModeToggle />
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default App
