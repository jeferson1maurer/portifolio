import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div>
            <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{ opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-20 text-center text-4xl">
                Projetos
                </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-14 flex flex-wrap text-center md:text-left lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{ opacity: 0, x: -100}}
                            transition={{ duration: 1}}
                            className="w-full lg:w-1/4">
                            <img 
                            src={project.image} 
                            width={250} 
                            height={250} 
                            alt={project.title} 
                            className="mb-6 rounded mx-auto md:mx-0" />
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, x:0}}
                            initial={{ opacity: 0, x: 100}}
                            transition={{ duration: 1}}
                            className="w-full pl-4 max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl ">{project.title}</h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                           
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                                    {tech}
                                </span>
                            ))} 
                            <button className="mt-4 mx-auto py-2 px-4 bg-white rounded text-stone-900 hover:bg-stone-400 hover:text-white"><a href={project.link} target="_blank">Confira o projeto aqui</a></button>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}