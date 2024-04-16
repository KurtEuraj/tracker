import "./Header.scss"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <nav className="nav">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "nav__link pending" : isActive ? "nav__link active" : "nav__link"
                }>
                    Home
                </NavLink>
                <NavLink to="/history" className={({ isActive, isPending }) =>
                    isPending ? "nav__link pending" : isActive ? "nav__link active" : "nav__link"
                }>
                    History
                </NavLink>
            </nav>
        </header>
    )
}

export default Header