import { NavLink } from "react-router-dom"

export const NavBar = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<h5>NOTE</h5>
			<ul className="items">
				<li className="item">
					<NavLink to="/home" exact >Главная</NavLink>
				</li>
				<li className="item">
					<NavLink to="/about" exact >Инфо</NavLink>
				</li>
			</ul>
		</nav>
	)
}