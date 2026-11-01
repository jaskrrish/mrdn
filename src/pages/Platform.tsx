import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

// Facts from the Mrdn Core demo build (STATUS.md, 29 Oct 2026). Keep them true.
const demoFacts = [
  { k: 'SAMPLE COMPANY', v: '800 RECORDS · 2,181 LINKS' },
  { k: 'SCALE TEST', v: '50,000 ROWS · ~7 S' },
  { k: 'INTERNET NEEDED', v: 'NONE' },
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
                MRDN // DEMO READY · BY APPOINTMENT
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
              Bring any data. See how it connects.
            </motion.h1>

            <div className="relative mb-10">
              <p className="text-[#7A7A7A] font-sans text-sm sm:text-base md:text-lg leading-relaxed">
                Mrdn reads a company's own files (spreadsheets, Tally exports, chat exports and
                letters) and builds one linked picture of its sites, trucks, suppliers, orders and
                stock, with the evidence for every link.
              </p>
              <motion.p
                style={{ opacity: isMobile ? 1 : paragraphOpacity }}
                className="text-[#7A7A7A] font-sans text-sm sm:text-base md:text-lg leading-relaxed mt-2"
              >
                Ask in plain words and get the answer with the rows behind it. Agents flag what is
                at risk and draft the fix. A person approves.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
              animate={stage !== 'spin' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/contact" className="bg-[#ff5722] text-[#000000] px-5 sm:px-8 py-3 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[#FFFFFF] transition-colors">
                Book a demo
              </Link>
              <Link to="/systems" className="border border-[#1A1A1A] text-[#FFFFFF] px-5 sm:px-8 py-3 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[#0A0A0A] transition-colors">
                How it works
              </Link>
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

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="border border-[#1A1A1A] relative bg-[#080808]/40"
                style={{ width: isMobile ? '90%' : '70%', maxWidth: '640px', height: isMobile ? '160px' : '520px' }}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#ff5722]/30"
                  style={{ width: isMobile ? '80px' : '260px', height: isMobile ? '80px' : '260px' }}
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed || isMobile ? { rotateY: 0 } : { rotateY: 360 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#ff5722]/50 border-dashed"
                  style={{ width: isMobile ? '50px' : '172px', height: isMobile ? '50px' : '172px' }}
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed || isMobile ? { rotateY: 0 } : { rotateY: -360 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                />

                {!isMobile && (
                  <>
                    <motion.div
                      className="absolute top-[18%] left-[28%] flex items-center gap-2"
                      initial={{ rotateY: 0 }}
                      animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                      transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                    >
                      <div className="w-2.5 h-2.5 bg-[#ff5722]"></div>
                      <span className="font-mono text-[11px] text-[#FFFFFF] tracking-[0.1em]">RUNS ON YOUR MACHINE</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-[35%] right-[12%] flex items-center gap-2"
                      initial={{ rotateY: 0 }}
                      animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                      transition={{ type: 'spring', stiffness: 70, damping: 10, duration: 1.2 }}
                    >
                      <div className="w-2.5 h-2.5 bg-[#FFFFFF]"></div>
                      <span className="font-mono text-[11px] text-[#AAAAAA] tracking-[0.1em]">EVIDENCE PER LINK</span>
                    </motion.div>
                  </>
                )}

                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ff5722]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff5722]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff5722]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff5722]"></div>
              </div>
            </div>

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
            { id: '01', name: 'ORION', sub: 'DATA INGESTION', path: '/systems/orion' },
            { id: '02', name: 'NEXUS', sub: 'ENTERPRISE OPS', path: '/systems/nexus' },
            { id: '03', name: 'HELIX', sub: 'CLOSED-DOOR', path: '/systems/helix' },
            { id: '04', name: 'AEGIS', sub: 'ASK IN PLAIN WORDS', path: '/systems/aegis' },
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

        <div className="hidden sm:flex w-56 md:w-80 lg:w-96 border-l border-[#1A1A1A] flex-col justify-center px-4 md:px-6 bg-[#080808] py-3 shrink-0 overflow-hidden gap-1">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-[#FFFFFF] tracking-[0.1em] uppercase font-semibold">
              DEMO BUILD // TESTED
            </span>
            <span className="font-mono text-[9px] text-[#7A7A7A] tracking-[0.1em] uppercase">
              29 OCT 2026
            </span>
          </div>
          {demoFacts.map((f) => (
            <div key={f.k} className="flex justify-between items-center border-t border-[#1A1A1A] pt-1">
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-[0.1em] uppercase">{f.k}</span>
              <span className="font-mono text-[9px] text-[#ff5722] tracking-[0.1em] uppercase">{f.v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
