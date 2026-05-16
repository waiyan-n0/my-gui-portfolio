const SkillBadge = ({ icon: Icon, name, hoverColor, percentage=0 }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 transition-all duration-300 group cursor-pointer
                    hover:bg-white dark:hover:bg-slate-700 shadow-sm hover:shadow-md">
        <Icon className={`text-2xl text-slate-400 transition-colors duration-300 ${hoverColor}`}/>

            <div className='flex flex-col'>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {name}
                </span>
                <span
                    className="text-[10px] text-blue-600 dark:text-blue-400 tracking-wide mt-0.5 w-full bg-slate-200 dark:bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
                    <div style={{width: `${percentage}%`}}
                        className='bg-blue-400 dark:bg-blue-500 h-full rounded-full transition-all duration-500 ease-out'
                    ></div>
    </span>
            </div>
    </div>
);

export default SkillBadge;