import { useRef } from 'react'
import './styles.css'

interface Props {
	todo: string
	setTodo: React.Dispatch<React.SetStateAction<string>>
	handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<>
			<form
				className='input'
				onSubmit={(e) => {
					handleAdd(e)
					inputRef.current?.blur()
				}}
			>
				<input
					ref={inputRef}
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
