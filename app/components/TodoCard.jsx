import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodos} = props
  return (
    <li className='todoItem bg-bkgcolor text-txtcolor'>
        {children}
        <div 
        className = 'actionsContainer bg-bkgcolor'>
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