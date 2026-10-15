import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

// Dot that tracks the pointer exactly, plus a ring that trails behind it.
// Only mounted for mouse/trackpad users; touch devices keep the default behaviour.
export function Cursor() {
    const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches);
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
    const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

    useEffect(() => {
        if (!enabled) return;
        document.documentElement.classList.add('custom-cursor');

        const onMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
            setHovering(!!(e.target as Element).closest('a, button, [role="button"]'));
        };
        const onLeave = () => setVisible(false);

        window.addEventListener('mousemove', onMove);
        document.documentElement.addEventListener('mouseleave', onLeave);
        return () => {
            document.documentElement.classList.remove('custom-cursor');
            window.removeEventListener('mousemove', onMove);
            document.documentElement.removeEventListener('mouseleave', onLeave);
        };
    }, [enabled, x, y]);

    if (!enabled) return null;

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0 }}>
            <motion.div
                style={{ x: ringX, y: ringY }}
                animate={{ scale: hovering ? 1.5 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-7 -top-7 size-14 rounded-full border-2 border-brand/50"
            />
            <motion.div
                style={{ x, y }}
                animate={{ scale: hovering ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="absolute -left-[5px] -top-[5px] size-2.5 rounded-full bg-brand"
            />
        </div>
    );
}
