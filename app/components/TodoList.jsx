import '@/app/index.css';
import TodoCard from './TodoCard';


export default function TodoList(props) {

    const { todos } = props

    return (
        <ul className='flex flex-col gap-4 max-w-screen-md w-full mx-auto'>
            {todos.map((todo, todoIndex) => {
                return(
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>
                            {todo}
                        </p>
                    </TodoCard>
                )

            })}
        </ul>
    )

}