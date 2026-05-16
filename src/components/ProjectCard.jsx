import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {motion} from "framer-motion";

const ProjectCard = ({ title, description, tags, githubLink, liveLink, delay }) => (
    <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
        }}>
        <div className="flex flex-col p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 group shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
                    {title}
                </h3>
                <div className="flex gap-3 text-slate-500 dark:text-slate-400">
                    <a href={githubLink} title="View On Github" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    {liveLink && (
                        <a href={liveLink === "Processing" ? "#" : liveLink} target={liveLink === "Processing" ? "_self" : "_blank"}
                            className={`${liveLink === "Processing" ? "opacity-30 cursor-not-allowed" : "hover:text-slate-900 dark:hover:text-white"} transition-colors`}
                            onClick={(e) => liveLink === "Processing" && e.preventDefault()}
                            title={liveLink === "Processing" ? "Live Demo coming soon" : "View Live"}
                        >
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default ProjectCard;