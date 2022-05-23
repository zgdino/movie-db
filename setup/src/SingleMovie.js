import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT, useGlobalContext } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  // setting movie to be an object
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    // if no response, in both cases loading is false because we are getting something
    if (data.Response === 'False') {
      setError({ show: true, msg: data.Error })
      setIsLoading(false)
    } else {
      setMovie(data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
    // every time id changes and it will change when movie poster/link clicked
  }, [id])
  // in case of loading display message that we are loading at the moment
  if (isLoading) {
    return <div className='loading'></div>
  }
  // in case of error display error message provided from API
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        {/* button to go back to home page */}
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
  // destructuring AFTER loading and error because otherwise it will be an empty object - look at the state hook in the beginning
  // setting up the aliases
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  return <section className="single-movie">
    <img src={poster} alt={title} />
    <div className="single-movie-info">
      <h2>{title}</h2>
      <p>{plot}</p>
      <h4>{year}</h4>
      {/* button to home page */}
      <Link to='/' className='btn'>
        back to movies
      </Link>
    </div>
  </section>
}

export default SingleMovie
