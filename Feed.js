import React from 'react'
import { FaTrash } from "react-icons/fa";

const Feed = ({list,handleCheck,handleDelete}) => {
  return (
    <div>
        {
        <li><input type="checkbox" checked={list.checked} onChange={()=>handleCheck(list.id)}/>
          <label>{list.item}</label>
          <FaTrash  role="button" tabIndex="0" onClick={()=>handleDelete(list.id)}/>
          </li>
}
    </div>
  )
}

export default Feed