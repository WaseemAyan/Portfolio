import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../data';

const socials = [
    { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
    { label: 'GitHub', href: contact.github, icon: Github },
    { label: 'Call', href: contact.phoneHref, icon: Phone }
];

export function Contact() {
    return (
        <section id="contact" className="bg-page-deep px-5 py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-[650px]"
            >
                <h3 className="text-4xl leading-tight md:text-5xl">
                    Available for select <span className="chonky chonky-magenta">freelance</span> opportunities
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                    Have an exciting project you need help with?
                    <br />
                    Send me an email or reach out on LinkedIn!
                </p>

                <a
                    href={`mailto:${contact.email}`}
                    className="group mt-10 inline-flex max-w-full items-center gap-3 font-mono text-lg text-white md:text-2xl"
                >
                    <Mail size={22} className="shrink-0 text-brand" />
                    <span className="chonky chonky-blue chonky-hover truncate">{contact.email}</span>
                </a>

                <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-mono">
                    {socials.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-brand"
                            >
                                <Icon size={18} />
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={`${import.meta.env.BASE_URL}Muhammad-Waseem-CV.pdf`}
                            download
                            className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-brand"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </li>
                </ul>

                <p className="mt-10 flex items-center gap-2 text-sm text-white/40">
                    <MapPin size={16} />
                    {contact.location}
                </p>
            </motion.div>
        </section>
    );
}
