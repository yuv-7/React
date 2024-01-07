import {NavLink} from "react-router-dom";

const Footer = () =>{
    return (
        <div className="about w-full h-96 bg-slate-400 flex">
        <div className="leftbox w-1/2 text-7xl text-cyan-700 text-center">
            <h4>Footer Section</h4>
        </div>
        <div className="rightbox list-none flex w-1/2 h-full text-2xl text-slate-200 gap-5">
        <NavLink to="/" className={({isActive}) => {return `${isActive ? "text-blue-500":"text-slate-900"}` }}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => {return `${isActive ? "text-blue-500":"text-slate-900"}` }}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => {return `${isActive ? "text-blue-500":"text-slate-900"}` }}>Contact</NavLink>
        </div>
    </div>
    );
}


export default Footer;