import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder='search here' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button>search</button>
        </form>
    </div>
  )
}

export default Search