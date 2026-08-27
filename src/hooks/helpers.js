export const themeTransition = (e, updateState) => {
    // Fallback for browsers without View Transition support
    if (!document.startViewTransition) {
        updateState();
        return;
    }

    const isDarkNow = document.documentElement.classList.contains('dark');
    const x = isDarkNow ? window.innerWidth : 0;
    const y = 0;

    // Calculate maximum radius to hit the opposite corner
    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
        updateState();
    });

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
            {
                clipPath: clipPath,
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        );
    });
};