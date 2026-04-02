import profilePic from "../assets/jefersonProfile.jpg";
import {HERO_CONTENT} from "../constants";
import { motion, stagger } from "framer-motion";

const containerVariants = {
    hidden: {opacity: 0, x: -100 },
    visible:{
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVAriants = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0, transition: { duration: 0.5}}
}

export default function Hero() {

    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img 
                            src={profilePic} 
                            alt="Jeferson Maurer" 
                            className="border-stone-900 rounded-3xl"
                            width={650}
                            height={650}
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{ duration: 1, delay: 1.5 }}
                            />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2 
                        variants={childVAriants}
                        className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                        >
                            Jeferson Maurer
                        </motion.h2>
                        <motion.span 
                        variants={childVAriants}
                        className="bg-linear-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Front End Developer
                        </motion.span>
                        <motion.p 
                        className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}   