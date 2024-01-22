import React, { useContext, useState }from 'react';
import { Context } from '../page';


export default function TodoForm() {

    const [Text, setText] = useState("");
    const [Tasklist, setTasklist] = useContext(Context);
    const completed = false;
const isEditing = false;
    const taskBackgroundStyle = " border-yellow-400 bg-yellow-100";
  
    function submitHandler(e) {
      if (Text !== "") {
        e.preventDefault();
        setTasklist([{ text: Text, completed: completed, taskBackgroundStyle: taskBackgroundStyle, isEditing: isEditing}, ...Tasklist]);
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
                  className="w-full p-4 font-mono bg-transparent border-2 border-white rounded-lg outline-none bg-slate-200"
                  value={ Text }
                  required
                  onChange={ (e) => {
                    setText(e.target.value)
                  } }
                />
              </div>
              <button className="flex-shrink-0 px-5 py-3 font-mono text-xl font-bold text-white bg-blue-400 border-4 border-dashed focus-within:bg-blue-500 hover:bg-blue-500 rounded-e-full">
                Add Task
              </button>
            </form>
    )
  }