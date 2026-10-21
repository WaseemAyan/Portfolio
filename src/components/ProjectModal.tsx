import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import type { Project } from '../data';

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!project) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] overflow-y-auto bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <div className="flex min-h-full items-start justify-center p-4 md:items-center md:p-10">
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="project-modal-title"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-page shadow-2xl ring-1 ring-white/10"
                        >
                            <button
                                ref={closeRef}
                                type="button"
                                onClick={onClose}
                                className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>

                            {project.images && project.images.length > 0 && (
                                <div
                                    className={clsx(
                                        'flex items-center gap-4 bg-[#121114] p-4',
                                        project.images.length > 1 && 'snap-x snap-mandatory overflow-x-auto'
                                    )}
                                >
                                    {project.images.map((img) => (
                                        <img
                                            key={img.src}
                                            src={img.src}
                                            alt={img.alt}
                                            className={clsx(
                                                'shrink-0 snap-start rounded object-contain',
                                                project.images!.length === 1
                                                    ? 'mx-auto max-h-[60vh]'
                                                    : img.portrait
                                                      ? 'h-[min(36vh,320px)] w-auto md:h-[min(60vh,520px)]'
                                                      : // Wide shots take the full strip width, one per swipe
                                                        'max-h-[min(60vh,520px)] w-full'
                                            )}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="p-6 md:p-10">
                                <p className="font-mono text-sm text-brand">{project.type}</p>
                                <h3 id="project-modal-title" className="mt-2 text-3xl md:text-4xl">
                                    {project.title}
                                </h3>
                                {(project.client || project.badge) && (
                                    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/50">
                                        {project.client && <span>{project.client}</span>}
                                        {project.badge && <span className="text-brand/80">{project.badge}</span>}
                                    </p>
                                )}

                                <p className="mt-6 leading-relaxed text-white/85">{project.description}</p>

                                {project.highlights && (
                                    <ul className="mt-5 space-y-2">
                                        {project.highlights.map((h) => (
                                            <li key={h} className="flex gap-3 leading-relaxed text-white/75">
                                                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <li key={t} className="rounded bg-plum px-3 py-1 font-mono text-xs text-white">
                                            {t}
                                        </li>
                                    ))}
                                </ul>

                                {(project.link || project.playStore || project.github) && (
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {project.link && (
                                            <ModalLink href={project.link} icon={<ExternalLink size={16} />}>
                                                Visit site
                                            </ModalLink>
                                        )}
                                        {project.playStore && (
                                            <ModalLink href={project.playStore} icon={<Play size={16} />}>
                                                Google Play
                                            </ModalLink>
                                        )}
                                        {project.github && (
                                            <ModalLink href={project.github} icon={<Github size={16} />}>
                                                Source
                                            </ModalLink>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function ModalLink({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand hover:text-brand"
        >
            {icon}
            {children}
        </a>
    );
}
