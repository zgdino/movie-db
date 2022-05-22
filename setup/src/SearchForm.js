import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  // pulling it from context.js
  const { query, setQuery, error } = useGlobalContext()
  
  return (
    // e.prevent.default() is preventing refreshing the page every time user submits an entry
    <form className='search-form' onSubmit={(e) => e.prevent.default()}>
      <h2>search movies</h2>
      <input
        type=''
        className='form-input'
        value={query}
        // set the query to input provided by user
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
