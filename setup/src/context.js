import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
// instantly exporting because you will use it later somewhere else
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(true)
  // error is object
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  const fetchMovies = async (url) => {
    // every time we type something in the input show loading on the screen
    setIsloading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setMovies(data.Search)
        setError({ show: false, msg: '' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query])

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
