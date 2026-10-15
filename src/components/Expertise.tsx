import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { expertise } from '../data';

const chonkyClass = {
    magenta: 'chonky-magenta',
    blue: 'chonky-blue',
    orange: 'chonky-orange'
} as const;

type Token = ['tag' | 'attr' | 'str' | 'text', string];

const tokenClass: Record<Token[0], string> = {
    tag: 'text-[#e0457b]',
    attr: 'text-[#8bc34a]',
    str: 'text-[#4fa3d9]',
    text: ''
};

const open = (name: string): Token[] => [['tag', `<${name}>`]];
const close = (name: string): Token[] => [['tag', `</${name}>`]];

const codeLines: [number, Token[]][] = [
    [0, [['tag', '<html '], ['attr', 'lang'], ['tag', '='], ['str', '"en"'], ['tag', '>']]],
    [1, open('head')],
    [2, [['tag', '<meta '], ['attr', 'name'], ['tag', '='], ['str', '"viewport"'], ['attr', ' content'], ['tag', '='], ['str', '"width=device-width, initial-scale=1.0"'], ['tag', '>']]],
    [2, [...open('title'), ['text', 'What do I do'], ...close('title')]],
    [1, close('head')],
    [1, open('body')],
    [2, [...open('h1'), ['text', 'Things I build for a living'], ...close('h1')]],
    [2, open('p')],
    [3, [['text', 'Android apps, desktop systems, and web platforms']]],
    [3, [['text', 'that real businesses run on every day.']]],
    [2, close('p')],
    [2, open('span')],
    [3, [['text', 'Oops, almost forgot to say "Hello World!"']]],
    [2, close('span')],
    [1, close('body')],
    [0, close('html')]
];

export function Expertise() {
    return (
        <section id="expertise" className="-mt-[3px] px-6 pb-10 pt-8 md:px-12 md:pb-12 md:pt-20 lg:pt-24">
            <div className="mx-auto max-w-[1240px]">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center font-poppins text-[12vw] font-semibold leading-[1.4] md:text-6xl lg:text-[75px]"
                >
                    My Expertise
                </motion.h2>

                <div className="mx-auto grid max-w-[1100px] md:grid-cols-3">
                    {expertise.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 * i }}
                                className={clsx(
                                    'border-2 border-line px-[30px] py-10 md:border-y-[3px]',
                                    // Inner edges are half width so neighbours add up to one 3px rule
                                    i === 0 && 'md:border-l-[3px] md:border-r-[1.5px]',
                                    i === 1 && 'md:border-x-[1.5px]',
                                    i === 2 && 'md:border-l-[1.5px] md:border-r-[3px]',
                                    i > 0 && '-mt-0.5 md:mt-0'
                                )}
                            >
                                <div className="mb-[13px] flex items-start gap-5">
                                    <Icon size={40} strokeWidth={1.5} className="mt-1 shrink-0 text-white" />
                                    <h3 className="font-poppins text-[26px] font-semibold leading-[1.2]">
                                        <span className={clsx('chonky', chonkyClass[item.accent])}>{item.title}</span>
                                        <br />
                                        {item.subtitle}
                                    </h3>
                                </div>
                                <p className="code-editor font-mono leading-[1.4] text-white">
                                    <span aria-hidden className="code-editor-rule" />
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Faded editor screenshot, purely decorative */}
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.45 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mx-auto mt-10 max-w-[640px] overflow-hidden whitespace-pre px-2 font-mono text-[8px] leading-[2.2] tracking-[0.05em] text-[#e6e6e6] [mask-image:linear-gradient(to_right,#000_80%,transparent)] sm:text-[11px] md:text-xs"
                >
                    {codeLines.map(([indent, tokens], i) => (
                        <div key={i} className="flex">
                            {Array.from({ length: indent }, (_, k) => (
                                <span key={k} className="w-[2ch] shrink-0 border-l border-white/15" />
                            ))}
                            <span>
                                {tokens.map(([kind, text], k) => (
                                    <span key={k} className={tokenClass[kind]}>
                                        {text}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
