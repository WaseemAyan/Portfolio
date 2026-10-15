import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import heroCover from '../assets/hero-cover.jpg';
import { clients } from '../data';

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

    return (
        <section
            ref={ref}
            id="home"
            className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24"
        >
            {/* Cover image with parallax, fading into the page colour */}
            <motion.div
                aria-hidden
                style={{ y: bgY, backgroundImage: `url(${heroCover})` }}
                className="absolute inset-0 -z-20 bg-cover bg-center"
            />
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 -z-10 h-[102%] bg-[linear-gradient(180deg,#00000012_60%,#1a191d_100%)]"
            />

            <div className="relative w-full max-w-[1300px] pt-24 text-center">
                <div aria-hidden className="absolute left-[56%] top-[-2%] md:top-[6%]">
                    <div className="orb" />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-[13vw] uppercase leading-[0.95] tracking-[2.2px] [text-shadow:1px_3px_11px_rgba(0,0,0,0.3)] md:text-[8vw] xl:text-[8.5rem]"
                >
                    Muhammad <br className="md:hidden" />
                    Waseem
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 font-display text-xl font-bold uppercase leading-[1.3] tracking-[1.6px] text-white md:text-[22px] md:leading-normal md:tracking-[2.2px]"
                >
                    Software Engineer, Android &amp; Desktop App Developer.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mx-auto mt-16 max-w-4xl pb-10 md:mt-20"
                >
                    <p className="mb-8 font-display text-lg font-bold uppercase tracking-[3px] text-white/50 md:text-[26px]">
                        Trusted by Government &amp; Private Sector
                    </p>
                    {/* Hovering the strip lights every logo up at once */}
                    <div className="logo-marquee group overflow-hidden py-6">
                        <ul className="logo-track flex w-max gap-12 md:gap-16">
                            {[...clients, ...clients].map((client, i) => (
                                <li key={i} aria-hidden={i >= clients.length} title={client.name}>
                                    <div className="grid size-16 place-items-center overflow-hidden rounded-full bg-white opacity-40 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] md:size-20">
                                        <img
                                            src={client.logo}
                                            alt={i < clients.length ? client.name : ''}
                                            className="size-full object-contain"
                                            style={{ padding: client.pad }}
                                            loading="lazy"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Scroll-down mouse, tucked right under the logos */}
                    <a
                        href="#expertise"
                        aria-label="Scroll to expertise"
                        className="mx-auto -mt-1 flex h-[54px] w-8 items-end justify-center rounded-full border-2 border-white/80 pb-2.5 transition-colors hover:border-white"
                    >
                        <ArrowDown size={16} strokeWidth={2.5} className="mouse-arrow text-violet" />
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
