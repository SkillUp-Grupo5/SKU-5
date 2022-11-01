export const Login = ({ handle }) => {
	return (
		<div>
			<button onClick={() => handle(true)}>Login</button>
		</div>
	)
}
