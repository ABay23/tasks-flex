import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import type { Todos } from './components/model'
import TodoList from './components/TodoList'

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

	const todoDisplay = () => {
		return todos.map((t) => <li key={t.id}>{t.todo}</li>)
	}

	console.log(todos)

	return (
		<>
			<div className='App'>
				<span className='heading'>
					<h3>tasker</h3>
				</span>
				<div>
					<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
				</div>
				<div>{todoDisplay()}</div>
				<TodoList todos={todos} setTodos={setTodos} />
			</div>
		</>
	)
}

export default App
