import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodos} = props
  return (
    <li className='todoItem'>
        {children}
        <div 
        className = 'actionsContainer bg-white '>
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