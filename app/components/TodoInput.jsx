import { useState } from 'react';
import { useRef } from 'react';
import { press2P } from '@/app/ui/fonts';
import '@/app/index.css';


export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    const [todoValue, setTodoValue] = useState('')
    const buttonRef = useRef(null);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          buttonRef.current.click();
        }
      };
  return (
    <header>
        <input value={todoValue}
               onChange={(e) => setTodoValue(e.target.value)}
               onKeyDown={handleKeyDown}
               className={`${press2P.className} mb-8 mt-5`} placeholder="Enter todo..."/>
       <button ref={buttonRef} 
               className={`${press2P.className} mb-8 mt-5`} 
               onClick={()=>{
                if(todoValue !== '') {
               handleAddTodos(todoValue)
               setTodoValue('')
                }
            }}
        >
                Add
            </button>
    </header>
  );
}