import React from "react"

export default function Todo({todo}){
  return(
    <div>
      <p className=" p-2 bg-gray-200 font-light m-2 rounded-md">{todo.fields.description}</p>
    </div>
  )
}