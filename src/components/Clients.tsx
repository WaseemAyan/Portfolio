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
        <section id="clients" className="py-20 relative bg-[#e4e8f2]" aria-labelledby="clients-heading">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-sm font-extrabold tracking-[0.25em] uppercase text-[#2443d6] mb-5">Trusted by</p>
                    <h2 id="clients-heading" className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight text-[#0b1027]">
                        The Clients I Have Provided Software Solutions
                    </h2>
                </motion.div>
            </div>

            <div className="logo-marquee overflow-hidden">
                <div className="logo-track flex w-max">
                    <LogoGroup />
                    {/* Duplicate set so the loop is seamless */}
                    <LogoGroup hidden />
                </div>
            </div>
        </section>
    );
};
