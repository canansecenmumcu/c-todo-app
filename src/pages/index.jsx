"use client"
import { useState } from "react";
import AddTodoForm from "@/components/AddTodoForm"
import TodoList from "@/components/TodoList"



export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Learn TailWind",
      completed: false
    },
    {
      id: 3,
      title: "Learn Next",
      completed: false
    },
  ])


  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  const completeTodo = (id) => {
    setItems(prevItems => prevItems.map(item => item.id === id ? { ...item, completed: !item.completed } : item));

  }
  const checkAll = () => {
    const allCompleted = items.every(item => item.completed);
    setItems(prevItems => prevItems.map(item => ({ ...item, completed: !allCompleted })))
  }

  const deleteCompletedItems = () => {
    setItems(prevItems => prevItems.filter(item => !item.completed))
  }

  const incompleteItemsCount = items.filter(item => !item.completed).length
  const anyCompleted = items.some(item => item.completed)

  const [filter, setFilter] = useState("all");

  const handleFilterChange=(filterType)=> {
    setFilter(filterType)
  }

  const filteredItems=items.filter((item)=> {
    if(filter === "completed"){
      return item.completed;
    }
    else if(filter === "notCompleted"){
      return !item.completed;
    }else{
      return item;
    }
  })



  return (
    <main >
      <h1 className="text-6xl text-rose-100 text-center mt-40 " >todos</h1>
      <div className="flex flex-col items-center justify-between my-4 shadow-md " >
        <AddTodoForm setItems={setItems} items={items} />
        <TodoList items={filteredItems} deleteItem={deleteItem} completeTodo={completeTodo} checkAll={checkAll} deleteCompletedItems={deleteCompletedItems} />
        <div className="flex-container  " >
          <p className="flex-item" > {incompleteItemsCount} items left </p>
          <div>
            <button onClick={() => handleFilterChange("all")} className="bg-blue-500 text-white py-2 px-4 rounded" >All</button>
            <button onClick={() => handleFilterChange("completed")} className="bg-green-500 text-white py-2 px-4 rounded" >Completed</button>
            <button onClick={() => handleFilterChange("notCompleted")} className="bg-red-500 text-white py-2 px-4 rounded" >Active</button>
          </div>
          {anyCompleted &&
            <button className=" hover:underline flex-item " onClick={deleteCompletedItems}> Clear Completed </button>}
        </div>
      </div>
    </main>
  );
}
