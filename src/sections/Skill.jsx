import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaPhp, FaNodeJs, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import SkillBadge from "../components/SkillBadge.jsx";
import Reveal from "../components/Reveal.jsx"

const Skill = () => {
    const { t } = useTranslation();

    return (
        <Reveal>
            <section className='p-8 md:px-16 max-w-7xl mx-auto'>
                <h1 className='text-xl font-semibold border-b-2 border-amber-400 w-fit mb-4'>
                    {t('skills.title')}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">
                            {t('skills.frontend')}
                        </label>
                        <div className='flex flex-wrap gap-2'>
                            <SkillBadge icon={FaHtml5} name="HTML5" hoverColor="group-hover:text-orange-500"/>
                            <SkillBadge icon={FaCss3} name="CSS3" hoverColor="group-hover:text-blue-500"/>
                            <SkillBadge icon={FaJs} name="JavaScript" hoverColor="group-hover:text-yellow-400"/>
                            <SkillBadge icon={FaReact} name="React" hoverColor="group-hover:text-cyan-400"/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">
                            {t('skills.backend')}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={FaPhp} name="PHP" hoverColor="group-hover:text-purple-500"/>
                            <SkillBadge icon={FaPython} name="Python" hoverColor="group-hover:text-blue-400"/>
                            <SkillBadge icon={FaNodeJs} name="NodeJS" hoverColor="group-hover:text-green-500"/>
                            <SkillBadge icon={DiMongodb} name="MongoDB" hoverColor="group-hover:text-green-600"/>
                            <SkillBadge icon={DiPostgresql} name="Postgresql" hoverColor="group-hover:text-green-600"/>
                            <SkillBadge icon={DiMysql} name="MySQL" hoverColor="group-hover:text-blue-600"/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">
                            {t('skills.tools')}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={FaGitAlt} name="Git" hoverColor='group-hover:text-red-500'/>
                            <SkillBadge icon={FaGithub} name="GitHub" hoverColor="group-hover:text-black"/>
                            <SkillBadge icon={FaLinux} name="Linux" hoverColor="group-hover:text-black"/>
                        </div>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}

export default Skill;