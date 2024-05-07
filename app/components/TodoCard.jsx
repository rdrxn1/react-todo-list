import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FaRegCopy } from "react-icons/fa";

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodos, handleCopyTodos} = props
  return (
    <li className='todoItem bg-bkgcolorlight dark:bg-bkgcolor text-txtcolorlight dark:text-txtcolor'>
        {children}
        <div 
        className = 'actionsContainer bg-bkgcolorlight dark:bg-bkgcolor'>
          <button
            onClick={() => {
              handleCopyTodos(index)
            }}>
            <FaRegCopy className='bg-transparent drop-shadow'/>
          </button>
        <button
        onClick={() => {
          handleEditTodos(index)
        }}>
        <FontAwesomeIcon icon={faPenToSquare} className='bg-transparent drop-shadow'/>
        </button>
        <button
        onClick={() => {
            handleDeleteTodos(index) 
        }}>
        <FontAwesomeIcon icon={faTrashCan} className='bg-transparent drop-shadow'/>
        </button>
        </div>
    </li>
  );
}