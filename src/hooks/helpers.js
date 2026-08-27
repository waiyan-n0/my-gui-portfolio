import { flushSync } from 'react-dom';

export const themeTransition = (e, updateState) => {
    // Fallback for browsers without View Transition support
    if (!document.startViewTransition) {
        updateState();
        return;
    }

    const isDarkNow = document.documentElement.classList.contains('dark');
    const x = isDarkNow ? window.innerWidth : 0;
    const y = 0;

    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    // Disable standard CSS color transitions on body temporarily to prevent lag
    document.documentElement.classList.add('[&_*]:!transition-none');

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

        const animation = document.documentElement.animate(
            {
                clipPath: clipPath,
            },
            {
                duration: 400,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                pseudoElement: '::view-transition-new(root)',
            }
        );

        animation.onfinish = () => {
            document.documentElement.classList.remove('[&_*]:!transition-none');
        };
    });
};