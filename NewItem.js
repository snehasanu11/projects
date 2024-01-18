import React from 'react'

const NewItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add new item..'value={newItem} onChange={(e)=>{setNewItem(e.target.value)}} />
        <button type="submit">add</button>
        </form>
    </div>
  )
}

export default NewItem