"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Tasklist, setTasklist] = useState([])
  const submitHandler = (elem) => {
    elem.preventDefault()
    setTasklist([...Tasklist, {Title, Desc}])
    console.log("🚀 ~ file: page.js:13 ~ submitHandler ~ Tasklist:", Tasklist)
    setTitle("")
    setDesc("")
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-lg lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full pb-6 border-b border-gray-300 pt-14 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Let&apos;s Creating &nbsp; <code className="font-mono font-bold">Todo List</code> today
        </p>
        <div className=" max-lg:hidden relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>

      <form className="flex gap-x-5 w-[400px] mt-24" aria-label="todoList-form" onSubmit={submitHandler}>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter your title"
            className="w-full p-3 border-2 font-mono border-white bg-transparent rounded-lg outline-none bg-slate-200"
            value={Title}
            onChange={(elem) => {
              setTitle(elem.target.value)
            }}
          />
          <input
            type="text"
            placeholder="Enter description"
            className="w-full mt-2 p-3 bg-transparent font-mono rounded-lg border-2 border-white outline-none bg-slate-200"
            value={Desc}
            onChange={(elem) => {
              setDesc(elem.target.value)
            }}
          />
        </div>
        <button className="flex-shrink-0 px-5 py-3 text-xl font-mono font-bold text-white bg-blue-400 rounded-e-full">
          Create Task
        </button>
      </form>
    </main>
  )
}
