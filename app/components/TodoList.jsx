import '@/app/index.css';
import TodoCard from './TodoCard';


export default function TodoList(props) {

    const { todos } = props

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return(
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p className='bg-white'>
                            {todo}
                        </p>
                    </TodoCard>
                )

            })}
        </ul>
    )

}