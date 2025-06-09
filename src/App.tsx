import './App.css'
import InputField from './components/InputField'

const App: React.FC = () => {
	return (
		<>
			<div className='App'>
				<span className='heading'>
					<h3>tasker</h3>
				</span>
				<div>
					<InputField />
				</div>
			</div>
		</>
	)
}

export default App
