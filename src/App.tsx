import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import type { Todos } from './components/model'

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<Todos[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
			setTodo('')
		}
	}

	console.log(todo)

	return (
		<>
			<div className='App'>
				<span className='heading'>
					<h3>tasker</h3>
				</span>
				<div>
					<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
				</div>
			</div>
		</>
	)
}

export default App
