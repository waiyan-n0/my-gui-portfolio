import { flushSync } from 'react-dom';

export const themeTransition = (e, updateState) => {
    if (!document.startViewTransition) {
        updateState();
        return;
    }

    const isDarkNow = document.documentElement.classList.contains('dark');

    // Use screen width/height for exact hardware boundaries on mobile
    const screenW = window.innerWidth || document.documentElement.clientWidth;
    const screenH = window.innerHeight || document.documentElement.clientHeight;

    const x = isDarkNow ? screenW : 0;
    const y = 0;

    // Calculate hypotenuse using actual visible viewport bounds
    const endRadius = Math.hypot(
        Math.max(x, screenW - x),
        Math.max(y, screenH - y)
    );

    const transition = document.startViewTransition(() => {
        flushSync(() => {
            updateState();
        });
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
                duration: 350,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                pseudoElement: '::view-transition-new(root)',
            }
        );
    });
};