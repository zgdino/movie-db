import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
// instantly exporting because you will use it later somewhere else
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // setting up state hooks that will be piped into other components used in this application hence - children
  const [isLoading, setIsloading] = useState(true)
  // error is an object
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('superman')

  const fetchMovies = async (url) => {
    // every time we type something in the input show loading on the screen
    setIsloading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      // properties in this API are capitalized
      if (data.Response === 'True') {
        setMovies(data.Search)
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
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
    // every time query changes we are fetching movies
  }, [query])

  return (
    <AppContext.Provider value={{ isLoading, movies, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
