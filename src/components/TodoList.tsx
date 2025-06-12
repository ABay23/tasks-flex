import type { Todos } from './model'
import './styles.css'

interface Props {
	todos: Todos[]
	setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
	return (
		<div className='todos'>
			{todos.map((t) => (
				<li>{t.todo}</li>
			))}
		</div>
	)
}

export default TodoList
