import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Systems() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  });

  const vantageOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const vantageScale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);

  return (
    <div ref={scrollRef} className="relative min-h-[150vh] bg-[#000000] overflow-x-hidden">
      <main className="xl:sticky xl:top-0 h-auto xl:h-screen pt-[56px] flex flex-col px-4 sm:px-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row flex-1 gap-4 lg:gap-6 py-4 lg:py-6 overflow-hidden">

          {/* Aside — full width on mobile, fixed width on desktop */}
          <aside className="w-full lg:w-72 xl:w-80 flex flex-col gap-4 lg:gap-8 lg:shrink-0 relative lg:h-full lg:justify-center">
            <div className="flex flex-col gap-3 lg:gap-4">
              <span className="font-mono text-[10px] text-[#ff5722] tracking-[0.2em] uppercase">
                Architecture v1.0
              </span>
              <h1 className="text-3xl sm:text-4xl font-sans font-normal tracking-tight text-[#FFFFFF] leading-none">
                SYSTEM<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>TOPOLOGY
              </h1>
              <p className="text-[#7A7A7A] font-sans text-sm leading-relaxed">
                MRDN is a four-module intelligence stack. Each module performs a distinct function —
                from autonomous data ingestion to multilingual AI — forming a unified operational
                intelligence platform built for India's sovereign environments.
              </p>
            </div>

            <div className="hidden sm:flex flex-col gap-4 lg:gap-6 border-l border-[#1A1A1A] pl-6 mt-0 lg:mt-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em]">
                  STRATEGY_01
                </span>
                <span className="font-mono text-xs text-[#FFFFFF] tracking-widest">
                  FULL DATA SOVEREIGNTY
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em]">
                  STRATEGY_02
                </span>
                <span className="font-mono text-xs text-[#FFFFFF] tracking-widest">
                  ZERO FOREIGN DEPENDENCY
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em]">
                  STRATEGY_03
                </span>
                <span className="font-mono text-xs text-[#FFFFFF] tracking-widest">
                  INDIA-NATIVE MODEL TRAINING
                </span>
              </div>
            </div>

            <div className="hidden lg:block border border-[#1A1A1A] p-4 bg-[#0A0A0A]">
              <span className="font-mono text-[9px] text-[#7A7A7A] block mb-2">SYSTEM_HEALTH</span>
              <div className="flex items-end gap-1 h-8">
                <motion.div className="w-1 bg-[#ff5722] h-4" animate={{ height: ['16px', '24px', '16px'] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}></motion.div>
                <motion.div className="w-1 bg-[#ff5722] h-6" animate={{ height: ['24px', '12px', '24px'] }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}></motion.div>
                <motion.div className="w-1 bg-[#ff5722] h-5" animate={{ height: ['20px', '28px', '20px'] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}></motion.div>
                <motion.div className="w-1 bg-[#ff5722] h-8" animate={{ height: ['32px', '20px', '32px'] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}></motion.div>
                <motion.div className="w-1 bg-[#ff5722] h-3" animate={{ height: ['12px', '24px', '12px'] }} transition={{ repeat: Infinity, duration: 1.7, ease: 'linear' }}></motion.div>
                <motion.div className="w-1 bg-[#ff5722] h-7" animate={{ height: ['28px', '16px', '28px'] }} transition={{ repeat: Infinity, duration: 2.1, ease: 'linear' }}></motion.div>
                <motion.div className="w-1 bg-[#ff5722] h-6" animate={{ height: ['24px', '32px', '24px'] }} transition={{ repeat: Infinity, duration: 1.9, ease: 'linear' }}></motion.div>
                <div className="w-1 bg-[#1A1A1A] h-8"></div>
              </div>
            </div>
          </aside>

          {/* Center section — system nodes */}
          <section className="flex-1 flex flex-col items-center relative py-6 lg:py-12 overflow-hidden">
            <div className="absolute w-[1px] h-full bg-[#1A1A1A] left-1/2 -translate-x-1/2 z-0"></div>
            <div className="absolute w-[1px] h-[90%] bg-[#ff5722]/30 left-1/2 -translate-x-1/2 z-0"></div>

            <motion.div
              className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-24 relative z-10 w-full py-6 lg:py-12"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, -400]),
              }}
            >
              {[
                { name: 'HELIX', path: '/systems/helix', label: '01_INIT', idx: '01' },
                { name: 'NEXUS', path: '/systems/nexus', label: '02_SYNC', idx: '02' },
                { name: 'ORION', path: '/systems/orion', label: '03_PROC', idx: '03' },
                { name: 'AEGIS', path: '/systems/aegis', label: '04_SEC', idx: '04' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-4 w-56 sm:w-64 group cursor-crosshair"
                >
                  <div className="flex-1 text-right font-mono text-[10px] text-[#7A7A7A] opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </div>
                  <div className="w-36 sm:w-48 h-12 bg-[#000000] border border-[#ff5722] flex items-center justify-center relative hover:bg-[#0A0A0A] transition-colors">
                    <span className="font-mono text-sm tracking-[0.2em] text-[#FFFFFF]">
                      {item.name}
                    </span>
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-[#ff5722]"></div>
                  </div>
                  <div className="flex-1 font-mono text-[10px] text-[#ff5722]">ACTIVE</div>
                </Link>
              ))}
            </motion.div>

            {/* Telemetry panel — desktop only */}
            <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 w-48 h-96 border-l border-[#1A1A1A] flex-col p-4 gap-4">
              <span className="font-mono text-[9px] text-[#7A7A7A]">REAL_TIME_TELEMETRY</span>
              <img
                className="w-full grayscale opacity-40"
                alt="abstract tech blueprint"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARzgKdNTGBQ0A8_XUfO4-aRyrleQfcwMmcttx_3BwYgoBr2m0i27Y7DBi8CkZJ7l6-al-L14ztk7Jg175O-6zTEoSDVGhniTj0r3acG2Tyw_w0YbsKTJVt2_xnPD7vyeOgVeMApCP3BUSzSHxzhvXKwEJP7Yt1qgX2yxgQ2KmNekpstOr7Tuodo6-ImWnt4EL6XIVTbSNWfg2h4B9I4G60MBhyW6U33WUqsu87gePCUa6RC5VFXwN7t7uZ9Ld8qc1TMvBz8XD4OZrv"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-2">
                <div className="h-[1px] w-full bg-[#ff5722]/40 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-1/4 h-full bg-[#ff5722]"
                    animate={{ x: ['-100%', '400%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[9px]">
                  <span className="text-[#7A7A7A]">SIGNAL_LATENCY</span>
                  <span className="text-[#ff5722]">4.2MS</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom module grid */}
      <section className="relative mx-4 sm:mx-6 border-t border-[#1A1A1A] grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#1A1A1A] z-50 mb-[48px]">
        {[
          {
            path: '/systems/helix',
            node: 'M_NODE_01',
            name: 'HELIX',
            desc: 'Government and defence intelligence. Connects 15–20 Indian ministries into a unified threat graph.',
            indicator: (
              <div className="mt-2 grid grid-cols-4 gap-1 w-8">
                <div className="w-1 h-1 bg-[#ff5722]"></div>
                <div className="w-1 h-1 bg-[#ff5722]"></div>
                <div className="w-1 h-1 bg-[#1A1A1A]"></div>
                <div className="w-1 h-1 bg-[#1A1A1A]"></div>
              </div>
            ),
          },
          {
            path: '/systems/nexus',
            node: 'M_NODE_02',
            name: 'NEXUS',
            desc: 'Enterprise operational intelligence. Real-time graph across all departments, enriched with live market signals.',
            indicator: (
              <div className="mt-2 border border-[#1A1A1A] w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 border border-[#ff5722]"></div>
              </div>
            ),
          },
          {
            path: '/systems/orion',
            node: 'M_NODE_03',
            name: 'ORION',
            desc: 'Autonomous data ingestion engine. Replaces manual integration pipelines with agent-driven onboarding.',
            indicator: (
              <div className="mt-2 flex gap-1">
                <div className="w-4 h-[1px] bg-[#ff5722]"></div>
                <div className="w-2 h-[1px] bg-[#1A1A1A]"></div>
              </div>
            ),
          },
          {
            path: '/systems/aegis',
            node: 'M_NODE_04',
            name: 'AEGIS',
            desc: 'Multilingual AI layer. Natural-language interface across all Indian languages for every operator.',
            indicator: (
              <div className="mt-2 flex flex-col gap-1 w-6">
                <div className="h-[1px] w-full bg-[#ff5722]"></div>
                <div className="h-[1px] w-3/4 bg-[#ff5722]"></div>
              </div>
            ),
          },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="bg-[#000000] p-3 sm:p-4 flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors group min-h-[140px] sm:min-h-[192px]"
          >
            <div>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#ff5722] block mb-1">
                {item.node}
              </span>
              <h3 className="font-mono text-xs tracking-widest text-[#FFFFFF] group-hover:text-[#ff5722]">
                {item.name}
              </h3>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#7A7A7A] leading-tight font-sans mt-2">
              {item.desc}
            </p>
            {item.indicator}
          </Link>
        ))}
      </section>
    </div>
  );
}
