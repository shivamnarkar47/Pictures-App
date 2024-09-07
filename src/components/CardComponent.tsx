import { Link, useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"
import { useState } from "react"
const CardComponent = ({ src, username, desc, link }: { src: string, username: string, desc: string, link: string }) => {
  const navigate = useNavigate();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const handleSearch = () => {
    const splitString = desc.split(" ");
    let searchNew = [];
    const startInt = parseInt(start);
    const endInt = parseInt(end);
    try {
        console.log(startInt)
        console.log(startInt < endInt)
          console.log(splitString.length)
      if (startInt >= 0 && endInt >= 0 && startInt < endInt) {

        if (startInt > splitString.length || endInt < splitString.length) {
          // for (let index = startInt - 1; index <= endInt - 1; index++) {
          //   searchNew.push(splitString[index]);
          // }
          searchNew = splitString.splice(startInt,endInt)
          console.log(searchNew.join(" "));
          navigate(`/search/${searchNew.join(' ')}`)
        }
        else {

          console.error("Please enter it within the length of desc")
        }
      }
      else {
        console.error("Please enter greater than 0 or end must be greater than start.")
      }

    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="p-2 border m-3 rounded  flex flex-col-reverse items-center justify-center">
      <div className="w-full h-auto p-4 z-10 ">
        <p> <strong>Author </strong>: {username}</p>
        <p>{desc != null && "Description : " + desc}</p>
        <div className="flex gap-3">
          <Input type="number" onChange={(e) => setStart(e.target.value)} />
          <Input type="number" onChange={(e) => setEnd(e.target.value)} />
          <Button onClick={handleSearch}><Search /></Button>
        </div>

      </div>
      <img className=" w-[500px] h-[500px]  rounded  object-cover z-0" src={src} loading="lazy" />

    </div>

  )
}

export default CardComponent
