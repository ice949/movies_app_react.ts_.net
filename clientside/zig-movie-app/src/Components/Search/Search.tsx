import React, { useState } from 'react';
import "./Search.css";

interface Props {}

const Search = (props: Props) => {
    const [search, setSearch] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(search)
    }
  return (
    <div className='Search'>
        <input type="text" value={search} placeholder="Search for a movie..." onChange={(e)=> {setSearch(e.target.value)}} />
        <button>Search</button>
    </div>
  )
}

export default Search