"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [Title, setTitle] = useState("");
  const todoId = Date.now()
  const completed = false;
  const deleteStyle = " border-yellow-400 bg-yellow-100";
  const [Tasklist, setTasklist] = useState([]);
  
  const submitHandler = (elem) => {
    if (Title !== "") {
      elem.preventDefault();
      setTasklist([{ title: Title, TodoId: todoId, completed: completed, deleteStyle: deleteStyle }, ...Tasklist]);
      setTitle("");
    } else {
      elem.preventDefault();
    }
  }

  const deleteStyleOnMouseLeaveHandler = (index) => {
    let copyTasks = [...Tasklist];
    if (copyTasks[index].completed) {
      copyTasks[index].deleteStyle = " border-green-700 bg-green-300";
    } else {
      copyTasks[index].deleteStyle = " border-yellow-400 bg-yellow-100";
    }

    setTasklist(copyTasks);
  }

  const deleteStyleOnMouseEnterHandler = (index) => {
    let copyTasks = [...Tasklist];
    copyTasks[index].deleteStyle = " border-rose-700 bg-rose-400";

    setTasklist(copyTasks);
  }

  const deleteHandler = (index) => {
    let copyTasks = [...Tasklist]
    copyTasks.splice(index, 1)

    setTasklist(copyTasks)
  }

  const checkboxHandler = (index) => {
    
    let copyTasks = [...Tasklist];
    if (copyTasks[index].completed == false) {
      copyTasks[index].deleteStyle = " border-green-700 bg-green-300";
      copyTasks[index].completed = true;
    } else {
      copyTasks[index].deleteStyle = " border-yellow-400 bg-yellow-100";
      copyTasks[index].completed = false;
    }

    setTasklist(copyTasks);
  }



  function renderTasks() {
    let renderedTasks;

    if (Tasklist.length > 0) {
      renderedTasks = Tasklist.map((value, index) => (
        <div key={index} className='flex items-center justify-between relative'>
          <div className={`flex justify-between items-center py-2 px-2 w-full my-2 mx-2  bg-opacity-10 border-opacity-25  border-2 rounded-md duration-500 ${value.deleteStyle}`} >
            <div className='flex items-center me-4'>
              <div className="checkbox-wrapper-31 mr-6">
                <input checked={value.completed} onChange={() => checkboxHandler(index)} type="checkbox" />
                <svg viewBox="0 0 35.6 35.6">
                  <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                  <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                  <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
              </div>
              <div>
                <p className={`text-white text-2xl ${value.completed ? "line-through text-opacity-25" : ""}`}>{value.title}</p>
              </div>
            </div>
            <button onClick={() => { deleteStyleOnMouseLeaveHandler(index); deleteHandler(index); }} onMouseEnter={() => { deleteStyleOnMouseEnterHandler(index) }} onMouseLeave={() => { deleteStyleOnMouseLeaveHandler(index) }} className='button'>
              <svg viewBox='0 0 448 512' className='svgIcon'>
                <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path>
              </svg>
            </button>
          </div>
        </div>
      ));
    } else {
      renderedTasks = <h1 className='text-center font-bold text-lg py-4'>No Task Available</h1>;
    }

    return renderedTasks;
  }

  return (

    <main className="flex flex-col items-center min-h-screen p-24 pb-0 overflow-hidden">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-lg lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full pb-6 border-b border-gray-300 pt-14 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Let&apos;s Creating &nbsp; <code className="font-mono font-bold">Todo List</code>
        </p>
        <div className=" max-lg:hidden relative flex place-items-center before:absolute before:h-[100px] before:w-[30px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <h1></h1>
      </div>
      <form className="flex gap-x-5 w-[450px] mt-24" aria-label="todoList-form" onSubmit={submitHandler}>
        <div className="flex-1">
          <input
            type="text"
            placeholder="What do you have planned?"
            className="w-full  p-4 border-2 font-mono border-white bg-transparent rounded-lg outline-none bg-slate-200"
            value={Title}
            required
            onChange={(elem) => {
              setTitle(elem.target.value)
            }}
          />
        </div>
        <button className="flex-shrink-0 px-5 py-3 text-xl font-mono font-bold text-white focus-within:bg-blue-500 bg-blue-400 hover:bg-blue-500 border-dashed border-4  rounded-e-full">
          Add Task
        </button>
      </form>
      <div className='w-2/3 h-[30rem] mt-12 bg-opacity-5 no-scrollbar bg-white outline-2 border-2 border-dashed border-x-4 border-y-white border-x-blue-500 rounded-lg overflow-auto'>{renderTasks()}</div>
    </main>

  )
}
