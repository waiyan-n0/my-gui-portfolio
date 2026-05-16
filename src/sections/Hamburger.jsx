import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AiOutlineCoffee } from "react-icons/ai";
import { LuEyeClosed } from "react-icons/lu";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const navItems = [
        { id: 'about', label: t('nav.about') },
        { id: 'education', label: t('nav.edu') },
        { id: 'skills', label: t('nav.skills')},
        { id: 'projects', label: t('nav.prj')},
    ];

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = id === 'about' ? 0 : 64;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: id === 'about' ? 0 : offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#121212] backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold cursor-pointer">
                    WYN
                </span>
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button key={item.id} onClick={() => scrollToSection(item.id)}
                            className="font-medium text-slate-600 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 dark:text-slate-300 focus:outline-none z-50">
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="open"
                                initial={{ rotate: 180 }}
                                animate={{ rotate: 1 }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                            >
                                <AiOutlineCoffee size={26} className='rotate-180' />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="closed"
                                size={26}
                                initial={{ rotate: -180 }}
                                animate={{ rotate: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <AiOutlineCoffee size={26} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-0 w-full bg-white dark:bg-[#121212] border-b border-slate-200 dark:border-slate-800 flex flex-col p-4 gap-4 shadow-xl md:hidden"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left py-2 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-medium transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Hamburger;