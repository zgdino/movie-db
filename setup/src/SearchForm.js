import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  // pulling from context.js
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
      {/* error is an object */}
      {/* if there is an error display what error.msg says */}
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
