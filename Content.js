import React from 'react'
import Feed from './Feed'


const Content = ({lists,setLists,handleCheck,handleDelete}) => {
  return (
    <div>
         <h1> My To-Do lists</h1>
      {
         lists.map((list)=>
            <Feed list={list} handleCheck={handleCheck} handleDelete={handleDelete} key={list.id} />
         )
      }
    </div>
  )
}

export default Content