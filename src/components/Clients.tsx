import { motion } from 'framer-motion';
import gkbLogo from '../assets/clients/gkb.png';
import govtBalochistanLogo from '../assets/clients/govt-balochistan.png';
import gsLogo from '../assets/clients/gs.png';
import humkaamLogo from '../assets/clients/humkaam.png';
import kebabishMarqueeLogo from '../assets/clients/kebabish-marquee.png';
import nkMartLogo from '../assets/clients/nk-mart.png';
import qmbLogo from '../assets/clients/qmb.png';

type Client = {
    name: string;
    logo: string;
    // Logo has its own background and should fill the circle edge to edge
    fill?: boolean;
    // Inner padding for logos sitting on the white circle
    pad?: string;
};

const clients: Client[] = [
    { name: "Government of Balochistan", logo: govtBalochistanLogo, pad: 'p-4' },
    { name: "HumKaam", logo: humkaamLogo, fill: true },
    { name: "Quetta Main Board Works", logo: qmbLogo, pad: 'px-1.5' },
    { name: "GKB", logo: gkbLogo, fill: true },
    { name: "Abdul Ghaffar & Sons", logo: gsLogo, pad: 'px-3' },
    { name: "Kebabish Marquee", logo: kebabishMarqueeLogo, fill: true },
    { name: "NK Mart", logo: nkMartLogo, pad: 'p-5' }
];

const LogoGroup = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center gap-7 pr-7 py-6" aria-hidden={hidden || undefined}>
        {clients.map(client => (
            <div
                key={client.name}
                title={client.name}
                className="logo-tile w-36 h-36 shrink-0 rounded-full bg-white overflow-hidden flex items-center justify-center"
            >
                <img
                    src={client.logo}
                    alt={hidden ? '' : client.name}
                    loading="lazy"
                    className={client.fill ? 'w-full h-full object-cover' : `w-full h-full object-contain ${client.pad ?? ''}`}
                />
            </div>
        ))}
    </div>
);

export const Clients = () => {
    return (
        <section id="clients" className="py-20 relative overflow-hidden bg-plum" aria-labelledby="clients-heading">
            <div aria-hidden className="pointer-events-none absolute -top-40 right-0 w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 w-[26rem] h-[26rem] rounded-full bg-secondary/30 blur-3xl" />
            <div className="relative max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="flex items-center justify-center gap-3 text-xs font-extrabold tracking-[0.25em] uppercase text-[#ff6fae] mb-5"><span className="h-px w-10 bg-[#ff6fae]" />Trusted by<span className="h-px w-10 bg-[#ff6fae]" /></p>
                    <h2 id="clients-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        The Clients Provided with <span className="text-gradient-light">Software Solutions</span>
                    </h2>
                </motion.div>
            </div>

            <div className="logo-marquee relative overflow-hidden">
                <div className="logo-track flex w-max">
                    <LogoGroup />
                    {/* Duplicate set so the loop is seamless */}
                    <LogoGroup hidden />
                </div>
            </div>
        </section>
    );
};
