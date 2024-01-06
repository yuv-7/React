import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar w-full h-max px-2 text-center flex justify-between items-center ">
            <div className="icon">icon</div>

            <ul className="w-max h-full flex p-5 gap-6 text-slate-800 text-xl">

                <NavLink to="/" className={({isActive}) => {return `${isActive ? "text-blue-500":"text-slate-900"}` }}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => {return `${isActive ? "text-blue-500":"text-slate-900"}` }}>About</NavLink>
                {/* <NavLink to="/profile" className={() => { }}>Profile</NavLink> */}
                <NavLink to="/contact" className={({isActive}) => {return `${isActive ? "text-blue-500":"text-slate-900"}` }}>Contact</NavLink>
                {/* <NavLink to="/github" className={() => { }}>Github</NavLink> */}

            </ul>

        </div>
    );
}

export default Header;