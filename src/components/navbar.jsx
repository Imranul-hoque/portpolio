import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-20 h-10 flex items-center font-bold justify-center bg-white text-black rounded-md shadow-md">
                <p className="blue-gradient_text">IMRAN</p>
            </NavLink>
            <nav className="flex gap-7 text-lg font-medium">
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    About
                </NavLink>
                <NavLink to={"/project"} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    Projects
                </NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}
