import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')

	return (
		<>
			<div className='App'>
				<span className='heading'>
					<h3>tasker</h3>
				</span>
				<div>
					<InputField todo={todo} setTodo={setTodo} />
				</div>
			</div>
		</>
	)
}

export default App
