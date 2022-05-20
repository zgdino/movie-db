import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  // pulling it from global context
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='movies'>
      {movies.map((movie) => {
        // destructuring needed properties coming from each movie
        // giving them aliases with : colon
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
        return <h4>movie</h4>
      })}
    </section>
  )
}

export default Movies
