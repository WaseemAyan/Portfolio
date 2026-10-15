import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';
import { experiences } from '../data';

export function Experience() {
    const [open, setOpen] = useState(0);

    return (
        <section id="experience" className="mb-12 mt-10 px-6 md:mb-36 md:mt-24 md:px-12">
            <div className="mx-auto max-w-[750px]">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 font-poppins text-[12vw] font-semibold leading-[1.1] md:text-6xl"
                >
                    Professional <br />
                    <span className="chonky chonky-violet">Experience</span>
                </motion.h2>

                <ul className="space-y-3">
                    {experiences.map((exp, i) => {
                        const isOpen = open === i;
                        const Icon = exp.icon;
                        return (
                            <motion.li
                                key={exp.company}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`exp-panel-${i}`}
                                    className={clsx(
                                        'flex w-full items-center gap-4 rounded-md px-5 py-4 text-left font-poppins text-sm text-white transition-colors md:text-base',
                                        isOpen ? 'bg-accordion-active' : 'bg-accordion hover:bg-accordion-active/80'
                                    )}
                                >
                                    <span className="flex-1 font-semibold">
                                        {exp.title} @ {exp.company}
                                    </span>
                                    <span className="hidden whitespace-nowrap font-medium sm:block">{exp.period}</span>
                                    <Plus
                                        size={18}
                                        className={clsx('shrink-0 transition-transform duration-300', isOpen && 'rotate-45')}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`exp-panel-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-2 rounded-md bg-plum p-5 md:p-6">
                                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                                                    <span className="flex items-center gap-2">
                                                        <Icon size={16} className="text-brand" />
                                                        {exp.company}
                                                    </span>
                                                    <span className="sm:hidden">{exp.period}</span>
                                                </div>
                                                <ul className="mb-5 mt-4 space-y-2 font-poppins text-[15px] leading-relaxed text-white">
                                                    {exp.description.map((d) => (
                                                        <li key={d} className="flex gap-3">
                                                            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                                                            {d}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="flex flex-wrap gap-2">
                                                    {exp.tags.map((t) => (
                                                        <li
                                                            key={t}
                                                            className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white"
                                                        >
                                                            {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
