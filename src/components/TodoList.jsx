import React from 'react'
import ListItem from './ListItem'

export default function TodoList({ items, deleteItem, completeTodo, checkAll }) {
  const allCompleted = items.every(item => item.completed)
  
  

  return (
    <div>
      {/* check all */}
      <input
        type="checkbox"
        className="mr-8"
        onChange={checkAll}
        checked={allCompleted}
      />
      <label> check all</label>
      {
        items.map((item) => <ListItem item={item} key={item.id} deleteItem={deleteItem} completeTodo={completeTodo} />
        )
      }
     
      
    </div>
  )
}
