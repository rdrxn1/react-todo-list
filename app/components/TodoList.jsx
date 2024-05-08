import '@/app/index.css';
import TodoCard from './TodoCard';


export default function TodoList(props) {

    const { todos } = props

    return (
        <div className='mx-3.5'>
        <ul className='flex flex-col gap-4 max-w-screen-md w-full mx-auto'>
            {todos.map((todo, todoIndex) => {
                return(
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p className='flex-1 truncate'>
                            {todo}
                        </p>
                    </TodoCard>
                )

            })}
        </ul>
        </div>
    )

}