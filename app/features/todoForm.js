import React, { useContext, useState, useId } from 'react';
import { TodoContext } from '../page';


export default function TodoForm() {

  const [Text, setText] = useState("");
  const [Tasklist, setTasklist] = useContext(TodoContext);
  const completed = false;
  const isEditing = false;
  const taskBackgroundStyle = " border-yellow-400 bg-yellow-100";

  function submitHandler(e) {
    if (Text !== "") {
      e.preventDefault();
      setTasklist([{ text: Text, completed: completed, taskBackgroundStyle: taskBackgroundStyle, isEditing: isEditing }, ...Tasklist]);
      setText("");
    } else {
      e.preventDefault();
    }
  }


  return (
    <form className="flex gap-x-5 w-[450px] mt-24" aria-label="todoList-form" onSubmit={ submitHandler }>
      <div className="flex-1">
        <input
          type="text"
          placeholder="What do you have planned?"
          className="w-full p-4 pl-8 font-mono bg-transparent border-2 border-white rounded-l-full outline-none bg-slate-200"
          value={ Text }
          required
          onChange={ (e) => {
            setText(e.target.value)
          } }
        />
      </div>
      <button className="flex-shrink-0 px-6 py-3 font-medium text-blue-400 duration-75 ease-in bg-transparent border border-blue-400 rounded-r-full hover:border-none hover:outline-dashed hover:brightness-200 hover:text-blue-600 hover:border-blue-600">
        Add Task
      </button>
    </form>
  )
}