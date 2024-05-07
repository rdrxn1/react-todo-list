import { useState } from 'react';
import { useRef } from 'react';
import { useTheme } from 'next-themes'
import DarkModeToggle from './DarkMode.jsx'; 
import '@/app/index.css';


export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue, toggleTheme } = props
    const buttonRef = useRef(null);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          buttonRef.current.click();
        }
      };
  return (
    <div className='mr-3.5 ml-3.5'>
    <div    className='flex items-stretch max-w-screen-md mx-auto gap-3.5'>
        <input value={todoValue}
               onChange={(e) => setTodoValue(e.target.value)}
               onKeyDown={handleKeyDown}
               className={`bg-bkgcolorlight dark:bg-bkgcolor text-txtcolorlight dark:text-txtcolor text-2xl mb-8 mt-5 py-3 pr-4 pl-6 w-full outline-none rounded-3xl placeholder-txtcolorlight dark:placeholder-txtcolor placeholder-opacity-60 dark:placeholder-opacity-30`} placeholder="Enter todo..."/>
       <button ref={buttonRef} 
               className={`bg-bkgcolorlight dark:bg-bkgcolor text-txtcolorlight dark:text-txtcolor text-2xl mb-8 mt-5 py-3 pr-3.5 pl-4 rounded-3xl transition-opacity duration-200 hover:opacity-80`} 
               onClick={()=>{
                if(todoValue !== '') {
               handleAddTodos(todoValue)
               setTodoValue('')
                }
       }}>
               Add
       </button>
       <DarkModeToggle/>
    </div>
    </div>
  );
}