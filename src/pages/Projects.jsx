import { Link } from "react-router-dom"
import {projects} from "./projects"
export default function Projects() {
    const projectCard = projects.map(project => {
        return (
            
            <div className="select-none bg-neutral-900 mt-6 rounded-md p-5 border border-neutral-800 border-t-neutral-600 hover:bg-linear-to-t from-neutral-900 to-neutral-800 min-h-50 lg:mt-10">
                <h4 className="text-neutral-300 font-bold text-xl">{project.title}</h4>
                <p className="rounded-md p-1 px-2 bg-neutral-600 text-neutral-400 font-light max-w-fit mt-2">{project.date}</p>
                <p className="text-neutral-400 leading-7 font-light lg:pr-20 mt-2">{project.info}</p>
                <Link key={project.title} to={project.link} target="blank"><p className="text-emerald-500 pt-2">View Project&#8594;</p></Link>
            </div>
        )
    })
    return(
        <div>
            <div className="text-center">
                <h1 className="text-neutral-200 text-3xl my-3 font-bold lg:text-4xl">Projects</h1>
                <p className="text-neutral-400 text-lg my-2 font-light px-10 py-5 lg:px-60 lg:font-light">A collection of tools and sites I've created, designed to be helpful, fun and sometimes just a little bit weird.
                </p>
            </div>
            <div className="px-3 pb-14 lg:px-60">
                {projectCard}
            </div>
        </div>
    )
}