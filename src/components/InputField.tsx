import './styles.css'

interface Props {
	todo: string
	setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
	return (
		<>
			<form className='input'>
				<input
					type='input'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					placeholder='Type New Task'
					className='input__box'
				/>
				<button className='input__submit' type='submit'>
					GO
				</button>
			</form>
		</>
	)
}

export default InputField
