import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

const links = [
    { id: 'home', label: 'home' },
    { id: 'expertise', label: 'expertise' },
    { id: 'work', label: 'work' },
    { id: 'experience', label: 'experience' },
    { id: 'contact', label: 'contact' }
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight whichever section crosses the middle of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );
        for (const { id } of links) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);

    return (
        <header
            className={clsx(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                scrolled ? 'h-15 bg-[rgba(26,26,26,0.8)] backdrop-blur-xl backdrop-saturate-[1.8]' : 'h-20 md:h-24'
            )}
        >
            <div className="mx-auto flex h-full max-w-[1300px] items-center justify-between px-6 md:px-12">
                <a
                    href="#home"
                    className={clsx(
                        'py-2 font-mono text-xl font-semibold tracking-tight text-white transition-opacity',
                        scrolled && 'md:pointer-events-none md:opacity-0'
                    )}
                >
                    &lt;MW /&gt;
                </a>

                <nav className="hidden md:block" aria-label="Primary">
                    <ul className="flex items-center gap-8 font-mono text-[1.1rem] tracking-[-1px]">
                        {links.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={clsx(
                                        'whitespace-nowrap transition-colors hover:text-brand',
                                        scrolled && 'text-[90%]',
                                        active === id ? 'text-brand' : scrolled ? 'text-brand/60' : 'text-white'
                                    )}
                                >
                                    {'// '}{label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="grid size-11 place-items-center rounded-full bg-white/10 text-white md:hidden"
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col bg-page-deep/95 px-6 py-6 backdrop-blur-xl md:hidden"
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="ml-auto grid size-11 place-items-center rounded-full bg-white/10 text-white"
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                        <ul className="mt-12 flex flex-col gap-6 font-mono text-3xl tracking-[-1px]">
                            {links.map(({ id, label }, i) => (
                                <motion.li
                                    key={id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setOpen(false)}
                                        className={active === id ? 'text-brand' : 'text-white'}
                                    >
                                        {'// '}{label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
