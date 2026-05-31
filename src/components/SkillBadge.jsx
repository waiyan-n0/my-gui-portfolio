const SkillBadge = ({ icon: Icon, name, hoverColor, percentage = 0 }) => {
    const getSkillLevel = (pct) => {
        const thresholds = [
            { min: 80, label: "Expert", color: "text-purple-500 dark:text-purple-400" },
            { min: 50, label: "Intermediate", color: "text-red-500 dark:text-red-400" },
            { min: 0,  label: "Beginner", color: "text-green-500 dark:text-green-400" }
        ];
        return thresholds.find(t => pct >= t.min) || thresholds[thresholds.length - 1];
    };

    const { label, color } = getSkillLevel(percentage);

    return (
        <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 transition-all duration-300 group cursor-pointer
                        hover:bg-white dark:hover:bg-slate-700 shadow-sm hover:shadow-lg">

            <div className="flex gap-2">
                <Icon className={`text-2xl text-slate-400 transition-colors duration-300 ${hoverColor}`} />
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {name}
                </span>
            </div>

            <div className="flex flex-col gap-1.5 w-full">
                <div className="w-full bg-slate-200 dark:bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
                    <div
                        style={{ width: `${percentage}%` }}
                        className="bg-blue-400 dark:bg-blue-500 h-full rounded-full transition-all duration-500 ease-out"
                    ></div>
                </div>

                <div className="flex justify-between items-center font-semibold tracking-wider">
                    <span className={`${color} text-[10px]`}>
                        {label}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default SkillBadge;