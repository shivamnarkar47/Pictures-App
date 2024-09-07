//@ts-nocheck
import axios from "axios"
import { ChevronLeft, ChevronRight, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardComponent from "./CardComponent";
import { Button } from "./ui/button";

const SearchGrid = () => {
  const { str } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(1);

  const fetchImages = async (params: string) => {
    await axios(`https://api.unsplash.com/search/photos?client_id=cCXTa4HMVdoqneEWRpK1CM74eyX2zJeXweVdzqoZ2Jc&page=${count}&query=${params}/`).then((response) => {

      setCards(response.data.results)
      setLoading(false);
      console.log(response.data)
    }).catch((e) => {
      console.error(e)
    })
  }
  useEffect(() => {
    if (str != undefined) {
      fetchImages(str)
    }
  }, [str, count])
  if (loading) {
    return (
      <div className="flex items-center p-4 flex-col h-full">
        <LoaderIcon />
      </div>
    )
  }
  console.log(cards)
  return (
    <div className="flex items-center p-4 flex-col h-full gap-4 ">
      <h1 className="px-3 font-bold text-2xl ">Result of : {str}</h1>
      <div className="grid grid-cols-1  grid-flow-row-dense md:grid-cols-4 text-center">
        {cards.length > 0 ? cards.map((card) => {
          return <CardComponent src={card?.urls.regular} username={card?.user?.username} desc={card?.description} link={card?.links?.html} key={card?.id} />
        }) : <h1>No Images Found 🥲</h1>}
      </div>
      <div className="p-3 flex items-center gap-5">
        {count > 1 &&
          <Button onClick={() => setCount(count - 1)}><ChevronLeft size={20} />Prev </Button>
        }
        <p>
          Page : {count}
        </p>
        <Button onClick={() => setCount(count + 1)}>Next <ChevronRight size={20} /></Button>
      </div>

      <div className="p-2">Made with ❤️  by Shivam Narkar</div>
    </div>
  )
}

export default SearchGrid
