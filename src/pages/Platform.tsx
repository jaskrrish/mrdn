import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, ReferenceLine, ResponsiveContainer, Tooltip } from 'recharts';

const indiaDataGrowth = [
  { year: '2005', users: 50 },
  { year: '2008', users: 80 },
  { year: '2010', users: 100 },
  { year: '2013', users: 213 },
  { year: '2015', users: 354 },
  { year: '2017', users: 450 },
  { year: '2019', users: 627 },
  { year: '2021', users: 759 },
  { year: '2023', users: 870 },
  { year: '2025', users: 900 },
];

export default function Platform() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [stage, setStage] = useState<'spin' | 'reveal' | 'ready'>('spin');
  // xl = 1280px — below that, tablets get the vertical layout instead of the split sticky one
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1280
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  });

  const paragraphOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const played = sessionStorage.getItem('meridian_platform_played');
    if (played || isMobile) {
      setHasPlayed(true);
      setStage('ready');
    } else {
      const spinTimer = setTimeout(() => {
        setStage('reveal');
        const revealTimer = setTimeout(() => {
          setStage('ready');
          sessionStorage.setItem('meridian_platform_played', 'true');
        }, 1500);
        return () => clearTimeout(revealTimer);
      }, 1200);
      return () => clearTimeout(spinTimer);
    }
  }, [isMobile]);

  return (
    <div
      ref={scrollRef}
      className="relative bg-[#080808] overflow-x-hidden"
      style={{ minHeight: isMobile ? 'auto' : '130vh' }}
    >
      <main
        className="pt-[56px] flex overflow-hidden w-full"
        style={
          isMobile
            ? { flexDirection: 'column', position: 'relative' }
            : { flexDirection: 'row', position: 'sticky', top: 0, height: '100vh' }
        }
      >
        {/* Left Content Area */}
        <section
          className={`relative z-50 flex flex-col ${isMobile ? 'justify-start' : 'justify-center'} px-6 sm:px-10 lg:px-16 xl:px-24 overflow-hidden pointer-events-none`}
          style={
            isMobile
              ? { width: '100%', paddingTop: '4.5rem', paddingBottom: '2.5rem' }
              : { width: '40%', minWidth: '400px' }
          }
        >
          <div className="max-w-xl pointer-events-auto">
            <motion.div
              className="space-y-2 mb-8"
              initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
              animate={stage !== 'spin' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#ff5722] uppercase">
                SYS-MRDN / v1.0 // SOVEREIGN BUILD
              </p>
              <div className="h-[1px] w-12 bg-[#ff5722]"></div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-normal tracking-tight text-[#FFFFFF] leading-[1.1] mb-6"
              initial={
                hasPlayed
                  ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
                  : { opacity: 0, filter: 'blur(20px)', scale: 1.1 }
              }
              animate={
                stage !== 'spin'
                  ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
                  : { opacity: 0, filter: 'blur(20px)', scale: 1.1 }
              }
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Sovereign Intelligence Infrastructure for India.
            </motion.h1>

            <div className="relative mb-10">
              <p className="text-[#7A7A7A] font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                MRDN integrates fragmented data streams across government ministries and enterprise
                operations into a unified intelligence graph — processed, structured, and acted upon
                in real time, entirely within Indian borders.
              </p>
              <motion.p
                style={{ opacity: isMobile ? 1 : paragraphOpacity }}
                className="text-[#7A7A7A] font-sans text-sm sm:text-base md:text-lg leading-relaxed mt-2"
              >
                From national security to commercial operations — MRDN delivers the decision clarity
                that complex environments demand.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
              animate={stage !== 'spin' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="bg-[#ff5722] text-[#000000] px-5 sm:px-8 py-3 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[#FFFFFF] transition-colors">
                Request Access
              </button>
              <button className="border border-[#1A1A1A] text-[#FFFFFF] px-5 sm:px-8 py-3 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[#0A0A0A] transition-colors">
                View Platform
              </button>
            </motion.div>
          </div>
        </section>

        {/* Right Grid Section */}
        <motion.section
          className="bg-[#0A0A0A] overflow-hidden"
          style={
            isMobile
              ? { position: 'relative', width: '100%', height: '260px', flexShrink: 0 }
              : { position: 'absolute', right: 0, top: 0, height: '100%' }
          }
          initial={
            isMobile
              ? { width: '100%', zIndex: 1 }
              : hasPlayed
              ? { width: '60vw', zIndex: 40 }
              : { width: '100vw', zIndex: 60 }
          }
          animate={
            isMobile
              ? { width: '100%', zIndex: 1 }
              : {
                  width: stage === 'spin' ? '100vw' : '60vw',
                  zIndex: stage === 'spin' ? 60 : 40,
                }
          }
          transition={
            isMobile
              ? {}
              : {
                  width: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                  zIndex: { delay: 1.5 },
                }
          }
        >
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 kinetic-grid opacity-20"></div>
            <div className="absolute inset-0 scan-line opacity-10"></div>

            {!isMobile && (
              <motion.div
                className="absolute top-0 bottom-0 w-full border-t border-[#ff5722]/20 bg-gradient-to-b from-[#ff5722]/5 to-transparent h-32"
                animate={{ y: ['-100%', '300%'] }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              />
            )}

            <div className="absolute inset-0 flex items-center justify-center pt-8 sm:pt-16 lg:pt-[128px] pr-0 lg:pr-[200px] xl:pr-[400px]">
              <div
                className="border border-[#1A1A1A] relative bg-[#080808]/40"
                style={{ width: '90%', maxWidth: '500px', height: isMobile ? '160px' : '480px', maxHeight: '600px' }}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#ff5722]/30"
                  style={{ width: isMobile ? '80px' : '192px', height: isMobile ? '80px' : '192px' }}
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed || isMobile ? { rotateY: 0 } : { rotateY: 360 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#ff5722]/50 border-dashed"
                  style={{ width: isMobile ? '50px' : '128px', height: isMobile ? '50px' : '128px' }}
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed || isMobile ? { rotateY: 0 } : { rotateY: -360 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                />

                {!isMobile && (
                  <>
                    <motion.div
                      className="absolute top-[20%] left-[30%] flex items-center gap-2"
                      initial={{ rotateY: 0 }}
                      animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                      transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                    >
                      <div className="w-2 h-2 bg-[#ff5722]"></div>
                      <span className="font-mono text-[9px] text-[#FFFFFF]">NOD-098 / ACTIVE</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-[40%] right-[15%] flex items-center gap-2"
                      initial={{ rotateY: 0 }}
                      animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                      transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                    >
                      <div className="w-2 h-2 bg-[#FFFFFF]"></div>
                      <span className="font-mono text-[9px] text-[#7A7A7A]">FLX-SYNC / 0.82ms</span>
                    </motion.div>
                  </>
                )}

                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#ff5722]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#ff5722]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#ff5722]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#ff5722]"></div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-48 right-12 p-4 bg-[#080808] border border-[#1A1A1A] w-48 hidden xl:block"
              initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
              animate={stage !== 'spin' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="font-mono text-[8px] text-[#ff5722] mb-1">SYSTEM LOG // 22:14:09</p>
              <div className="space-y-1">
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; INIT MRDN_v1.0</p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; CONNECTING NODES...</p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">
                  &gt; MODULES_ONLINE: HELIX / NEXUS / ORION / AEGIS
                </p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">
                  &gt; DATA_SOVEREIGNTY: CONFIRMED
                </p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; STATUS: OPERATIONAL</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Bottom Dock */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={stage === 'ready' ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full bg-[#0A0A0A] border-t border-[#1A1A1A] z-[90] flex flex-row items-stretch mb-[48px] min-h-[88px] sm:min-h-[128px] max-h-[160px]"
      >
        <div className="flex-1 flex items-center px-4 sm:px-8 md:px-12 gap-6 sm:gap-10 md:gap-12 overflow-x-auto">
          {[
            { id: '01', name: 'HELIX', sub: 'GOV INTELLIGENCE', path: '/systems/helix' },
            { id: '02', name: 'NEXUS', sub: 'ENTERPRISE OPS', path: '/systems/nexus' },
            { id: '03', name: 'ORION', sub: 'DATA INGESTION', path: '/systems/orion' },
            { id: '04', name: 'AEGIS', sub: 'AI INTERFACE', path: '/systems/aegis' },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex flex-col gap-1 min-w-[80px] sm:min-w-[100px] opacity-50 hover:opacity-100 transition-opacity cursor-pointer shrink-0"
            >
              <span className="font-mono text-[8px] sm:text-[9px] text-[#7A7A7A] tracking-widest uppercase">
                CORE-{item.id}
              </span>
              <span className="text-[#FFFFFF] font-sans text-sm sm:text-base tracking-tight">
                {item.name}
              </span>
              <span className="font-mono text-[7px] sm:text-[8px] text-[#ff5722]">{item.sub}</span>
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex w-48 md:w-72 lg:w-80 border-l border-[#1A1A1A] flex-col justify-center px-4 md:px-6 bg-[#080808] py-2 shrink-0 overflow-hidden">
          <div className="flex justify-between items-end mb-1">
            <span className="font-mono text-[7px] text-[#7A7A7A] tracking-tighter uppercase">
              INDIA_CONNECTED_USERS
            </span>
            <span className="font-mono text-[7px] text-[#7A7A7A] tracking-tighter uppercase">
              2005–2025
            </span>
          </div>
          <div className="h-10 sm:h-14 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={indiaDataGrowth} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff5722" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ff5722" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" hide />
                <Tooltip
                  contentStyle={{
                    background: '#0A0A0A',
                    border: '1px solid #1A1A1A',
                    borderRadius: 0,
                    fontSize: 9,
                    fontFamily: 'monospace',
                    color: '#7A7A7A',
                  }}
                  itemStyle={{ color: '#ff5722' }}
                  labelStyle={{ color: '#7A7A7A', fontSize: 9 }}
                  cursor={{ stroke: '#1A1A1A' }}
                />
                <ReferenceLine
                  y={0}
                  label={{
                    value: 'INTELLIGENCE EXTRACTED: ~0%',
                    position: 'insideBottomLeft',
                    fill: '#666',
                    fontSize: 9,
                    fontFamily: 'monospace',
                  }}
                  stroke="#333"
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#ff5722"
                  strokeWidth={1.5}
                  fill="url(#areaGrad)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="font-mono text-[7px] text-[#ff5722] tracking-tighter uppercase mt-1">
            SOURCE: WORLD BANK / TRAI / ITU
          </div>
        </div>
      </motion.div>
    </div>
  );
}
