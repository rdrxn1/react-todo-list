import { useState } from 'react';
import { useRef } from 'react';
import { press2P } from '@/app/ui/fonts';
import '@/app/index.css';


export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    const buttonRef = useRef(null);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          buttonRef.current.click();
        }
      };
  return (
    <header    className='flex items-stretch max-w-screen-md w-full mx-auto gap-3.5'>
        <input value={todoValue}
               onChange={(e) => setTodoValue(e.target.value)}
               onKeyDown={handleKeyDown}
               className={`bg-bkgcolor text-txtcolor text-lg mb-8 mt-5 py-3 pr-4 pl-6 w-full outline-none rounded-3xl placeholder-txtcolor placeholder-opacity-40`} placeholder="Enter todo..."/>
       <button ref={buttonRef} 
               className={`bg-bkgcolor text-txtcolor mb-8 mt-5 py-3 pr-3.5 pl-4 rounded-3xl transition-opacity duration-200 hover:opacity-80`} 
               onClick={()=>{
                if(todoValue !== '') {
               handleAddTodos(todoValue)
               setTodoValue('')
                }
       }}>
               Add
       </button>
    </header>
  );
}