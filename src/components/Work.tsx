import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCallback, useState } from 'react';
import { clsx } from 'clsx';
import { projects } from '../data';
import type { Project, ProjectCategory } from '../data';
import { ProjectModal } from './ProjectModal';

const categories: ProjectCategory[] = ['Mobile', 'Desktop', 'Web', 'AI'];
// Featured card needs a wide screenshot, so pin it rather than taking the first project
const featured = projects.find((p) => p.title === 'HumKaam') ?? projects[0];

const pad = (n: number) => String(n).padStart(2, '0');

export function Work() {
    const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
    const [selected, setSelected] = useState<Project | null>(null);
    const closeModal = useCallback(() => setSelected(null), []);

    const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
    const filters = [
        { label: 'All' as const, count: projects.length },
        ...categories.map((c) => ({ label: c, count: projects.filter((p) => p.category === c).length }))
    ];

    return (
        <section id="work" className="px-6 pb-8 pt-2 md:px-12">
            <div className="mx-auto max-w-[1240px]">
                {/* Intro + featured project */}
                <div className="grid items-start gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-poppins text-[22vw] font-semibold leading-[1.05] md:text-[120px] lg:text-[150px]">
                            My <br />
                            Work
                        </h2>
                        <p className="mt-6 font-mono text-[17px] font-medium leading-[1.4] text-white md:text-[19px] lg:text-xl">
                            Shipped Android, desktop, and web systems for retail, hospitality, manufacturing, and government clients.
                            <br />
                            I also build AI products: real-time computer vision and multi-agent LLM assistants.
                        </p>
                    </motion.div>

                    <motion.button
                        type="button"
                        onClick={() => setSelected(featured)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="group relative block overflow-hidden rounded-md text-left md:mt-24"
                    >
                        {featured.images?.[0] && (
                            <img
                                src={featured.images[0].src}
                                alt={featured.images[0].alt}
                                className="aspect-[16/10] w-full object-cover object-left-top opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                                loading="lazy"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                            <h4 className="font-poppins text-[22px] font-medium">Featured Project</h4>
                            <h3 className="mt-1 font-mono text-3xl font-semibold">{featured.title}</h3>
                            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-page transition group-hover:bg-brand">
                                View Project <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                            </span>
                        </div>
                    </motion.button>
                </div>

                {/* Filter */}
                <div className="mt-24 flex flex-wrap items-baseline gap-x-6 gap-y-3 font-mono text-sm">
                    <span className="text-white/40">Filter by</span>
                    {filters.map(({ label, count }, i) => (
                        <span key={label} className="flex items-baseline gap-6">
                            {i > 0 && <span className="text-white/20">/</span>}
                            <button
                                type="button"
                                onClick={() => setFilter(label)}
                                className={clsx(
                                    'transition-colors hover:text-brand',
                                    filter === label ? 'text-brand' : 'text-white'
                                )}
                                aria-pressed={filter === label}
                            >
                                {label === 'All' ? 'All' : label === 'AI' ? 'AI / ML' : label}
                                <sup className="ml-1 text-[10px] opacity-60">{pad(count)}</sup>
                            </button>
                        </span>
                    ))}
                </div>

                {/* Grid */}
                <motion.ul layout className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project) => (
                            <motion.li
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} onOpen={() => setSelected(project)} />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </motion.ul>
            </div>

            <ProjectModal project={selected} onClose={closeModal} />
        </section>
    );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
    const image = project.images?.find((img) => !img.portrait) ?? project.images?.[0];
    const Icon = project.icon;

    return (
        <button type="button" onClick={onOpen} className="group block w-full text-left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#232227]">
                {image ? (
                    <img
                        src={image.src}
                        alt={image.alt}
                        className={clsx(
                            'size-full transition duration-500 group-hover:scale-105',
                            image.portrait ? 'object-contain py-4' : 'object-cover object-top'
                        )}
                        loading="lazy"
                    />
                ) : (
                    <div className="grid size-full place-items-center bg-gradient-to-br from-plum to-[#121114]">
                        <Icon size={64} strokeWidth={1.2} className="text-white/40" />
                    </div>
                )}
                <div className="absolute inset-0 flex items-end bg-page/70 p-5 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="inline-flex items-center gap-2 font-mono text-sm text-brand">
                        Show project <ArrowRight size={14} />
                    </span>
                </div>
            </div>
            <h3 className="mt-4 truncate text-lg">
                <span className="chonky chonky-violet chonky-hover">{project.title}</span>
            </h3>
            <p className="mt-1 text-sm text-white/50">{project.type}</p>
        </button>
    );
}
