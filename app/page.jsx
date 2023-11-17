"use client"
import CountButton from "./CountButton"
import CountButtonBy5 from "./CountButtonBy5"
import SearchBar from "./SearchBar"
export default function Page() {
    return <div>
      <CountButton />
      
      <CountButtonBy5 />
      <hr />
      <a href="https://github.com/McCawley-Ajay/gitexample">My Github Repo</a>
      <hr />
      <SearchBar />
      <hr />
    </div>
  }
