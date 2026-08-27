import { flushSync } from 'react-dom';

export const themeTransition = (e, updateState) => {
    // Fallback for browsers without View Transition support
    if (!document.startViewTransition) {
        updateState();
        return;
    }

    const isDarkNow = document.documentElement.classList.contains('dark');

    const transition = document.startViewTransition(() => {
        flushSync(() => {
            updateState();
        });
    });

    transition.ready.then(() => {
        if (!isDarkNow) {
            document.documentElement.animate(
                {
                    clipPath: [
                        'inset(0 0 100% 0)',
                        'inset(0 0 0 0)'
                    ],
                },
                {
                    duration: 400,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }
            );
        } else {
            document.documentElement.animate(
                {
                    clipPath: [
                        'inset(0 0 0 0)',
                        'inset(0 0 100% 0)'
                    ],
                },
                {
                    duration: 400,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }
            );
        }
    });
};