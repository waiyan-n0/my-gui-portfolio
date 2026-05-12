const Tooltip = ({ children, text, position}) => {
    const positionClasses = {
        right: "left-full ml-2 top-1/2 -translate-y-1/2",
        top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    };

    const arrowClasses = {
        right: "top-1/2 -left-1 -translate-y-1/2 rotate-45",
        top: "left-1/2 -bottom-1 -translate-x-1/2 rotate-45",
    };
    // console.log(position)
    return (
        <div className="group relative flex items-center justify-center">
            {children}
            <div className={`absolute scale-0 transition-all duration-200 group-hover:scale-100 z-[100] ${positionClasses[position]}`}>
                <div className="relative bg-slate-800 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap">
                    {text}
                    <div className={`absolute w-2 h-2 bg-slate-800 ${arrowClasses[position] || arrowClasses.right}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;