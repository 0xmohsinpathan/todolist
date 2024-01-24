import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { TodoContext } from '../page';

export default function RenderTodo() {

  const [Tasklist, setTasklist] = useContext(TodoContext);
  const [editText, setEditText] = useState("");

  const checkboxHandler = (index) => {

    let copyTasks = [...Tasklist];
    if (!copyTasks[index].completed) {
      copyTasks[index].taskBackgroundStyle = " border-green-700 bg-green-300";
      copyTasks[index].completed = true;
    } else {
      copyTasks[index].taskBackgroundStyle = " border-yellow-400 bg-yellow-100";
      copyTasks[index].completed = false;
    }

    setTasklist(copyTasks);
  }

  function editSubmitHandler(e) {
    e.preventDefault();
    let copyTasks = [...Tasklist];
    copyTasks[copyTasks.findIndex((todo) => todo.isEditing == true)].text = editText;
    const editIndex = copyTasks.findIndex((todo) => todo.isEditing == true)
    const completed = copyTasks[editIndex].completed

    if (completed) {
      copyTasks[copyTasks.findIndex((todo) => todo.isEditing)].taskBackgroundStyle = " border-green-700 bg-green-300";
    } else {
      copyTasks[copyTasks.findIndex((todo) => todo.isEditing)].taskBackgroundStyle = " border-yellow-400 bg-yellow-100";
    }

    copyTasks[copyTasks.findIndex((todo) => todo.isEditing == true)].isEditing = false;
    setTasklist(copyTasks);
    setEditText("");
  }

  function editButtonToggle(index) {

    let copyTasks = [...Tasklist];

    if (!copyTasks[index].isEditing) {
      copyTasks[index].taskBackgroundStyle = " border-sky-500 bg-cyan-700";
      copyTasks[index].isEditing = true

      setEditText(copyTasks[index].text)
    } else if (copyTasks[index].completed) {
      copyTasks[index].taskBackgroundStyle = " border-green-700 bg-green-300";
      copyTasks[index].isEditing = false
    } else {
      copyTasks[index].taskBackgroundStyle = " border-yellow-400 bg-yellow-100";
      copyTasks[index].isEditing = false
    }

    setTasklist(copyTasks);
  }


  const StyleOnMouseLeaveHandler = (index) => {
    let copyTasks = [...Tasklist];
    if (copyTasks[index].completed) {
      copyTasks[index].taskBackgroundStyle = " border-green-700 bg-green-300";
    } else {
      copyTasks[index].taskBackgroundStyle = " border-yellow-400 bg-yellow-100";
    }

    setTasklist(copyTasks);
  }

  const deleteHandler = (index) => {
    let copyTasks = [...Tasklist]
    copyTasks.splice(index, 1)

    setTasklist(copyTasks)
  }

  const deleteStyleOnMouseEnterHandler = (index) => {
    let copyTasks = [...Tasklist];
    copyTasks[index].taskBackgroundStyle = " border-rose-700 bg-rose-400";

    setTasklist(copyTasks);
  }


  function renderTasks() {
    let renderedTasks;

    if (Tasklist.length > 0) {
      renderedTasks = Tasklist.map((value, index) => (
        <div key={ index } className={ `relative flex items-center justify-between ${value.text.length >= 50 ? "mr-4 hover:mr-3" : ""}` }>
          <div className={ `flex justify-between items-center ${value.text.length >= 50 ? "hover:items-startt" : ""} py-2 px-2 w-full my-2 mx-2  bg-opacity-10 border-opacity-25  border-2 rounded-md duration-500 ${value.taskBackgroundStyle}` } >
            <div className={ `${value.isEditing ? "hidden" : "flex"} justify-around items-center ${value.text.length >= 50 ? "hover:items-start" : ""} me-4 gap-4 w-[80%]` }>
              <div className="checkbox-wrapper">
                <input checked={ value.completed } onChange={ () => checkboxHandler(index) } type="checkbox" />
                <svg viewBox="0 0 35.6 35.6">
                  <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                  <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                  <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
              </div>
              <div className='w-[90%]'>
                <p className={ `text-white text-2xl  select-none  ${value.text.length >= 50 ? "truncate hover:whitespace-normal" : ""}  ${value.completed ? "line-through text-opacity-25" : ""}` }>{ value.text }</p>
              </div>
            </div>
            <form onSubmit={ editSubmitHandler } className={ `justify-between w-full gap-4 ${value.isEditing ? "flex" : "hidden"} ` }>
              <button type='submit' >
                <Image
                  className="relative hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
                  src="/Send_hor_fill.svg"
                  alt="Send_hor Logo"
                  width={ 40 }
                  height={ 40 }
                  priority
                />
              </button>
              <input
                type="text"
                value={ editText }
                id={ `my id ${index}` }
                required
                onChange={ (e) => { setEditText(e.target.value) } }
                className="flex-grow py-3 pl-6 text-2xl bg-transparent outline-none"
              />
            </form>
            <button className={ `${value.isEditing ? "" : "hidden"}` } onClick={ () => editButtonToggle(index) }>
              <Image
                className="relative hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
                src="/Dell_fill.svg"
                alt="Dell_fill Logo"
                width={ 40 }
                height={ 40 }
                priority
              />
            </button>
            <div className={ `items-center gap-4 ${value.isEditing ? "hidden" : "flex"}` } >
              <button className="edit-button hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70]" onClick={ () => { editButtonToggle(index) } }>
                <svg className="edit-svgIcon hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70]" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                </svg>
              </button>
              <button onClick={ () => { StyleOnMouseLeaveHandler(index); deleteHandler(index); } } onMouseEnter={ () => { deleteStyleOnMouseEnterHandler(index) } } onMouseLeave={ () => { StyleOnMouseLeaveHandler(index) } } className='button'>
                <svg viewBox='0 0 448 512' className='svgIcon hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70]'>
                  <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ));
    } else {
      renderedTasks = <h1 className='pt-12 text-3xl text-center text-gray-400 text-opacity-60'>No Task Available</h1>;
    }

    return renderedTasks;
  }

  return (
    <div className='relative min-w-[480px] w-2/3 h-[30rem] mt-12 bg-opacity-80 no-scrollbar bg-black outline-2 border-2 border-dashed border-x-4 border-y-white border-x-blue-500 rounded-lg overflow-auto'>
      { renderTasks() }
    </div>
  )
}