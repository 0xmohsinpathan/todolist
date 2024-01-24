"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import RenderTodo from './features/renderTodo';
import TodoForm from './features/todoForm';

export const TodoContext = React.createContext();
export default function Home() {

  const [Tasklist, setTasklist] = useState([]);

  return (
    <TodoContext.Provider value={ [Tasklist, setTasklist] }>
      <main className="flex flex-col items-center min-h-screen p-24 pb-0 overflow-hidden background">
        <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-lg lg:flex">
          <p className={ ` ${Tasklist.length > 0 ? "hidden" : "flex"} fixed top-0 left-0 justify-center w-full pb-6 border-b border-gray-300 pt-14 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30` }>
            Let&apos;s Create<code className="pl-2 font-mono font-bold">A Task</code>
          </p>
          <p className={ ` ${Tasklist.length > 0 ? "flex" : "hidden"} fixed top-0 left-0 justify-center w-full pb-6 border-b border-gray-300 pt-14 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30` }>
            There are <code className="px-4 font-mono text-xl font-bold">{ Tasklist.length }</code>   tasks in all.
          </p>
          <div className=" max-lg:hidden relative flex place-items-center before:absolute before:h-[100px] before:w-[30px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={ 180 }
              height={ 37 }
              priority
            />
          </div>
        </div>
        <TodoForm />
        <RenderTodo />
      </main>
    </TodoContext.Provider>
  )
}