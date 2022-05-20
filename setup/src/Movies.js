import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  // pulling it from global context
  const { movies, isLoading } = useGlobalContext()
  // if we are still loading diplay div loading
  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='movies'>
      {movies.map((movie) => {
        // destructuring needed properties coming from each movie
        // giving them aliases with : colon
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

        return (
          // each movie is a link to the single movie component
          // if clicked it leads to more info about the movie
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              {/* if no photo available, display default photo */}
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
