const SkillBadge = ({ icon: Icon, name, hoverColor }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 transition-all duration-300 group cursor-pointer
                    hover:bg-white dark:hover:bg-slate-700 shadow-sm hover:shadow-md">
        <Icon className={`text-2xl text-slate-400 transition-colors duration-300 ${hoverColor}`} />

        <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            {name}
        </span>
    </div>
);

export default SkillBadge;