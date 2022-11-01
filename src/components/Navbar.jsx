import { Link } from 'react-router-dom'

export const Navbar = ({ children, routes }) => {
	return (
		<div>
			<ul>
				{routes.map((route) => {
					return (
						<Link to={route.link} key={route.link} style={{ padding: '5px' }}>
							{route.name}
						</Link>
					)
				})}
			</ul>
			<div>{children}</div>
		</div>
	)
}
