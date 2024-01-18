
import './App.css';
import {useState, useEffect} from 'react'

import Content from './Content';
import NewItem from './NewItem';
import Search from './Search';
import api from './api/Lists'

function App() {
  const[lists,setLists]=useState([
    
])
const [newItem,setNewItem]=useState('')
const[search,setSearch]=useState('')
const handleCheck=(id)=>{
  const result=lists.map(list=>(list.id===id)?{...list,checked:!list.checked}:list)
  setLists(result)
}
const handleDelete=async(id)=>{
  try{
    await api.delete(`Lists/${id}`)
  const result=lists.filter((list)=>list.id!==id)
  setLists(result)
}
catch(err){
  if(err.response){
    console.log(err.response.data)
    console.log(err.response.status)
    console.log(err.response.header)
  }
  else{ 
    console.log(`error.${err.message}`)
}
}}

const handleSubmit=async(e)=>{
   e.preventDefault() 
   const id=lists.length? lists[lists.length-1].id+1:1
   const addItem={id,checked:false,item:newItem}
   try{
    const response=await api.post('/Lists',addItem)
    const result=[...lists,response.data]
    setLists(result)
  }
  catch(err){
    if(err.response){
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.header)
    }
    else{ 
      console.log(`error.${err.message}`)
  }
  
}
}
   
    
  

useEffect(()=>{
  const result=async()=>{
    try{
      const response=await api.get('/Lists')
      console.log(response.data)
      setLists(response.data)
    }
    catch(err){
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
      }
      else{ 
        console.log(`error.${err.message}`)
    }
    }}
result()
},[])

  return (
    <div className="App">
    <Content lists={lists.filter((list)=>(list.item).toLowerCase().includes(search.toLowerCase()))} handleDelete={handleDelete} handleCheck={handleCheck}/>
     <NewItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
     <Search search={search} setSearch={setSearch}/>
    </div>

  );
  
  }

export default App;
