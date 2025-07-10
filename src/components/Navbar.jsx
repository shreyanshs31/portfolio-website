import { NavLink } from "react-router-dom"
export default function Navbar() {
    return(
        <div className="w-full flex justify-center py-2 px-3">
            <ul className="py-2.5 px-4 font-extralight lg:font-light ">
                <NavLink to='/'><li className="inline-block px-2.5 py-1.5 mx-0 my-2.5 text-neutral-400 lg:mx-2">Root /</li></NavLink>
                <NavLink to='/about'><li className="inline-block px-2.5 py-1.5 mx-0 my-2.5 text-neutral-400 lg:mx-2 ">About</li></NavLink>
                <NavLink to='/projects'><li className="inline-block px-2.5 py-1.5 mx-0 my-2.5 text-neutral-400 lg:mx-2">Projects</li></NavLink>
                <NavLink to='/cv'><li className="inline-block px-2.5 py-1.5 mx-0 my-2.5 text-neutral-400 lg:mx-2">CV</li></NavLink>
                <NavLink to='mailto:shreyansh.shukla.3101@gmail.com'><li className="inline-block px-2.5 py-1.5 mx-0 my-2.5 text-neutral-400 lg:mx-2">Contact</li></NavLink>
            </ul>
        </div>        
    )
}