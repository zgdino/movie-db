import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  // e.prevent.default() is preventing refreshing the page every time user submits an entry
  return (
    <form className='search-form' onSubmit={(e) => e.prevent.default()}>
      <h2>search movies</h2>
      <input
        type=''
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
