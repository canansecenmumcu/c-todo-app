"use client"
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodoForm({setItems,items}) {
  const [newItem, setNewItem] = useState("")
  const submitHandle = (e)=> {
    e.preventDefault();
    setItems([...items, {id:uuidv4(), completed:false , title: newItem}])
    setNewItem("")
  }
  return (
    <form onSubmit={submitHandle} >
      <input
        className='text-xl mb-2'
        type="text"
        placeholder='What needs to be done?'
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  )
}
