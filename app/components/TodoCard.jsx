import { useRef } from 'react';
import { CgDarkMode } from "react-icons/cg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FaRegCopy } from "react-icons/fa";
import { toast } from 'sonner';



export default function TodoCard(props) {



  


  const {children, handleDeleteTodos, index, handleEditTodos, handleCopyTodos} = props
  return (
    <div className='flex items-stretch gap-3.5'>
    <li className='flex items-center w-full h-full my-2.5 p-3.5 rounded-[20px] bg-bkgcolorlight dark:bg-bkgcolor text-txtcolorlight dark:text-txtcolor'>
        {children}
        <div
        className = 'flex items-center gap-3.5 bg-bkgcolorlight dark:bg-bkgcolor'>
          <button
            onClick={() => {
              handleCopyTodos(index);
              toast.success('Text copied to clipboard!', {
                position: 'bottom-right',
                duration: 3000,
              });
          }}>
            <FaRegCopy className='bg-transparent drop-shadow transition-opacity duration-200 hover:opacity-70'/>
          </button>
        <button
        onClick={() => {
          handleEditTodos(index)
        }}>
        <FontAwesomeIcon icon={faPenToSquare} className='bg-transparent drop-shadow transition-opacity duration-200 hover:opacity-70'/>
        </button>
        <button
        onClick={() => {
            handleDeleteTodos(index) 
        }}>
        <FontAwesomeIcon icon={faTrashCan} className='bg-transparent drop-shadow transition-opacity duration-200 hover:opacity-70 focus:opacity-0'/>
        </button>
        </div>
    </li> 
    <div className='gap-3.5 bg-mainbkgcolorlight dark:bg-mainbkgcolor text-mainbkgcolorlight dark:text-mainbkgcolor my-2.5 p-3.5 rounded-3xl transition-opacity duration-200 w-14 h-13 hover:opacity-70'>
                <CgDarkMode className='w-7 h-6 mx-auto'/>
    </div>
    </div>
  );
}