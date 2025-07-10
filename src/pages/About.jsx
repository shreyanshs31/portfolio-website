import {techStack} from "./techStack"

export default function About() {

    const cardElement = techStack.map(tech => {
        return (
            <div key={tech.heading} className="select-none bg-neutral-900 mt-6 rounded-md p-5 border border-neutral-800 border-t-neutral-600 hover:bg-linear-to-t from-neutral-900 to-neutral-800 lg:mt-4 ">
                <h4 className="text-neutral-300 font-bold text-xl">{tech.heading}</h4>
                <p className="text-neutral-400 leading-7 font-light">{tech.items}</p>
            </div>
        )
    })

    return (
        <div>
            <div className="text-center">
                <h1 className="text-neutral-200 font-bold text-3xl my-3 lg:text-4xl">Shreyansh Shukla</h1>
                <p className="text-neutral-400 leading-8 text-base my-2 font-light px-10 py-5 lg:px-60 lg:font-normal">As a frontend developer specializing in React applications and Tailwind CSS, I am proficient in constructing and deploying fully functional applications. I am currently expanding my skillset by studying machine learning. My passion lies in developing projects from inception to completion, and I have experience in team building and management, having served as the technical head of the E-cell club.</p>
            </div>
            <div className="px-3 pb-14 lg:px-60">
                <h3 className="text-neutral-200 text-2xl font-light mt-2 pt-5 pb-2">My Tech Stack</h3>
                <hr className="w-auto text-neutral-800 border"/>
                <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                {cardElement}

                </div>
            </div>
        </div>
    )
}