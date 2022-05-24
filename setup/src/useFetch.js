import React, { useState, useEffect } from 'react'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {

  const [isLoading, setIsloading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)

 const fetchMovies = async (url) => {
   // every time we type something in the input show loading on the screen
   setIsloading(true)
   try {
     const response = await fetch(url)
     const data = await response.json()
     // properties in this API are capitalized
     if (data.Response === 'True') {
       setData(data.Search)
       setError({ show: false, msg: '' })
     } else {
       setError({ show: true, msg: data.Error })
     }
     setIsloading(false)
   } catch (error) {
     console.log(error)
   }
 }

 useEffect(() => {
   fetchMovies(`${API_ENDPOINT}&s=${urlParams}`)
   // every time urlParams changes we are fetching movies
 }, [urlParams])

  return {isLoading, error, data}
}

export default useFetch
