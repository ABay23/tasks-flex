import type { Todos } from './model'
import './styles.css'

interface Props {
	todos: Todos[]
	setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
	return <div>TodoList</div>
}

export default TodoList
