import React from 'react'

export default function ListItem({ item, deleteItem, completeTodo }) {
  return (
    <div className="flex justify-between " >
      <div className="flex" >
        <input
          type="checkbox"
          className="mr-6"
          checked={item.completed}
          onChange={()=>completeTodo(item.id) }
        />
        <li className={ item.completed ? "line-through text-xl list-none" :  "list-none text-xl mr-20"} > {item.title} </li>
      </div>
      <button
        className="text-2xl style={{ display: 'flex', alignItems: 'center' }} "
        onClick={() => deleteItem(item.id)}
      >
        X
      </button>
    </div>
  )
}
