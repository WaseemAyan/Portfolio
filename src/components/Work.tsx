import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCallback, useState } from 'react';
import { clsx } from 'clsx';
import { projects } from '../data';
import type { Project, ProjectCategory } from '../data';
import { ProjectModal } from './ProjectModal';

const categories: ProjectCategory[] = ['Mobile', 'Desktop', 'Web', 'AI'];
// Shown in the 3D phone, so it needs a portrait screenshot
const featured = projects.find((p) => p.title === 'Chaman Bazar') ?? projects[0];

// Thickness of the 3D phone body in px (one slice per px)
const PHONE_DEPTH = 14;

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

                    <FeaturedProject project={featured} onOpen={() => setSelected(featured)} />
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

function FeaturedProject({ project, onOpen }: { project: Project; onOpen: () => void }) {
    const screen = project.images?.find((img) => img.portrait) ?? project.images?.[0];

    return (
        <div className="relative flex flex-col items-center md:block md:h-[640px]">
            {/* 3D phone that slowly turns through a few poses */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-6 md:absolute md:right-10 md:top-0 lg:right-20"
            >
                {/* Float + perspective live on a wrapper; framer's inline transform would replace the CSS spin */}
                <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="phone-shadow [perspective:900px]"
                >
                    <button
                        type="button"
                        onClick={onOpen}
                        aria-label={`View ${project.title}`}
                        className="phone-3d relative block aspect-[9/19] w-[200px] lg:w-[230px]"
                    >
                        {/* Twist (tilt) lives on the button, the spin on this inner layer */}
                        <span className="phone-spin absolute inset-0 block">
                            {/* Stacked slices give the body real thickness, so the rounded edge shows when it turns */}
                            {Array.from({ length: PHONE_DEPTH }, (_, k) => (
                                <span
                                    key={k}
                                    aria-hidden
                                    className="absolute inset-0 rounded-[38px]"
                                    style={{
                                        transform: `translateZ(${-k}px)`,
                                        background: k === PHONE_DEPTH - 1 ? '#0d0d10' : `hsl(240 4% ${30 - k}%)`
                                    }}
                                />
                            ))}
                            {/* Back panel with camera bump, facing the other way so it shows mid-spin */}
                            <span
                                aria-hidden
                                className="absolute inset-0 rounded-[38px] bg-[linear-gradient(160deg,#2a2a30,#0d0d10_60%)]"
                                style={{ transform: `translateZ(${-PHONE_DEPTH}px) rotateY(180deg)` }}
                            >
                                <span className="absolute left-4 top-4 grid size-[68px] grid-cols-2 place-items-center gap-1 rounded-[20px] bg-[#1c1c21] p-2 ring-1 ring-white/10">
                                    <span className="size-6 rounded-full bg-[#050507] ring-2 ring-[#2c2c33]" />
                                    <span className="size-2 rounded-full bg-[#3a3a40]" />
                                    <span className="size-6 rounded-full bg-[#050507] ring-2 ring-[#2c2c33]" />
                                    <span className="size-6 rounded-full bg-[#050507] ring-2 ring-[#2c2c33]" />
                                </span>
                            </span>
                            {/* Front glass */}
                            <span className="absolute inset-0 rounded-[38px] bg-[#0b0b0d] p-2 [transform:translateZ(1px)]">
                                <span aria-hidden className="absolute left-1/2 top-2 z-10 h-[18px] w-[38%] -translate-x-1/2 rounded-b-2xl bg-[#0b0b0d]" />
                                <span className="relative block size-full overflow-hidden rounded-[31px] bg-white">
                                    {screen && (
                                        <img
                                            src={screen.src}
                                            alt={screen.alt}
                                            className="size-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    )}
                                    <span aria-hidden className="phone-glare absolute inset-0" />
                                </span>
                            </span>
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Hand-drawn arrow pointing at the phone */}
            <svg
                aria-hidden
                viewBox="0 0 220 220"
                className="absolute left-[14%] top-[300px] hidden w-[170px] text-violet md:block lg:left-[18%]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 205 C 15 120, 80 50, 190 30" strokeWidth="5" />
                <path d="M27 200 C 28 125, 90 62, 186 40" strokeWidth="2" opacity="0.6" />
                <path d="M150 8 L 196 28 L 165 64" strokeWidth="5" />
            </svg>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-14 self-start md:absolute md:bottom-0 md:left-0 md:mt-0"
            >
                <h4 className="font-poppins text-[22px] font-medium">Featured Project</h4>
                <h3 className="mt-2 font-mono text-3xl font-semibold">{project.title}</h3>
                <button
                    type="button"
                    onClick={onOpen}
                    className="group mt-6 inline-flex items-center gap-2 rounded bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:bg-accordion-active"
                >
                    View Project <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </button>
            </motion.div>
        </div>
    );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
    const image =
        project.images?.find((img) => img.cover) ??
        project.images?.find((img) => !img.portrait) ??
        project.images?.[0];
    const Icon = project.icon;

    return (
        <button type="button" onClick={onOpen} className="group block w-full text-left">
            <div
                className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#232227]"
                style={image?.portrait ? { background: `linear-gradient(160deg, ${project.color ?? '#241d41'}, #121114)` } : undefined}
            >
                {image ? (
                    image.portrait ? (
                        // Phone screenshot rises from the bottom of the tile, cropped like a device peeking in
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute left-1/2 top-[12%] w-[38%] -translate-x-1/2 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        // Anchor wide screenshots top-left so the app's logo and nav stay in view
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="size-full object-cover object-left-top transition duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                    )
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
