import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

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

  if (isLoading) {
    return <div className='loading'></div>
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
      </div>
    )
  }

  return <h2>single movie</h2>
}

export default SingleMovie
