//@ts-nocheck
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { Dispatch,  FormEvent,  SetStateAction,  useRef } from 'react'

type SearchProps = {
  setSearch : Dispatch<SetStateAction<string>>,
  search: string
}

const Searchbar = ({setSearch,search}:SearchProps) => {
  const searchit = (e:FormEvent,search:string) => {
    e.preventDefault();
    if (search != "" || search != undefined) navigate(`/search/${search}`)
    
  }
  const navigate = useNavigate();
  const inputref = useRef(null)

  window.addEventListener('keydown', function (e) {
  if (e.keyCode==191) {
    if (document.getElementById('search') !== document.activeElement) {
      e.preventDefault();
      console.log('Search is not in focus');
      document.getElementById('search').focus();
    } else {
      console.log('Default action of CtrlF');
      return true;
    }
  }
});
  return (
    <form className="flex gap-3">
      <Input className="max-w-sm" placeholder="Click / to search " onChange={(e) => setSearch(e.target.value)} required ref={inputref} id="search"/>
      <Button onClick={(e)=>searchit(e,search)}>Search</Button>
    </form>
  )
}

export default Searchbar
