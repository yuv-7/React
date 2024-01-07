import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar w-full h-max px-2 text-center flex justify-between items-center ">
            <div className="icon">icon</div>

            <ul className="w-max h-full flex p-5 gap-6 text-slate-800 text-xl">

                <NavLink to="/" className={({isActive})=> `${isActive ? "text-blue-300" : "text-slate-900"}`}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> `${isActive ? "text-blue-300" : "text-slate-900"}`}>Abou</NavLink>
                <NavLink to="/contact" className={({isActive})=> `${isActive ? "text-blue-300" : "text-slate-900"}`}>Contact</NavLink>
            </ul>

        </div>
    );
}

export default Header;