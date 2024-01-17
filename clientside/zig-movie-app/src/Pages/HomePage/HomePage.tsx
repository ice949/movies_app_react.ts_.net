import React from 'react'
import Search from '../../Components/Search/Search'
import MovieList from '../../Components/MovieList/MovieList'

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Search />
      <MovieList />
    </div>
  )
}

export default HomePage;