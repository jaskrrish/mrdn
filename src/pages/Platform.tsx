import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

export default function Platform() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [stage, setStage] = useState<'spin' | 'reveal' | 'ready'>('spin');
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // Scroll animations
  const paragraphOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const bottomDockY = useTransform(scrollYProgress, [0, 0.2], [80, 0]);
  const bottomDockOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const played = sessionStorage.getItem('meridian_platform_played');
    if (played) {
      setHasPlayed(true);
      setStage('ready');
    } else {
      // Stage 1: Spin
      const spinTimer = setTimeout(() => {
        setStage('reveal');
        // Stage 2: Reveal finishes after transition
        const revealTimer = setTimeout(() => {
          setStage('ready');
          sessionStorage.setItem('meridian_platform_played', 'true');
        }, 1500);
        return () => clearTimeout(revealTimer);
      }, 1200);
      return () => clearTimeout(spinTimer);
    }
  }, []);

  return (
    <div className="relative min-h-[130vh] bg-[#080808] overflow-x-hidden">
      <main className="sticky top-0 h-screen pt-[56px] flex flex-row overflow-hidden w-full">
        {/* Left Content Area (Text Area) */}
        <section 
          className="relative z-50 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden pointer-events-none"
          style={{ width: "40%", minWidth: "400px" }}
        >
          <div className="max-w-xl pointer-events-auto">
            <motion.div 
              className="space-y-2 mb-8"
              initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
              animate={stage !== 'spin' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#ff5722] uppercase">SYS-MERIDIAN / v4.2.0 // SOVEREIGN BUILD</p>
              <div className="h-[1px] w-12 bg-[#ff5722]"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-sans font-normal tracking-tight text-[#FFFFFF] leading-[1.1] mb-6"
              initial={hasPlayed ? { opacity: 1, filter: "blur(0px)", scale: 1 } : { opacity: 0, filter: "blur(20px)", scale: 1.1 }}
              animate={stage !== 'spin' ? { opacity: 1, filter: "blur(0px)", scale: 1 } : { opacity: 0, filter: "blur(20px)", scale: 1.1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Sovereign Intelligence Infrastructure for India.
            </motion.h1>
            
            <div className="relative mb-10">
              {/* First 2 lines always visible */}
              <p className="text-[#7A7A7A] font-sans text-base md:text-lg leading-relaxed">
                Meridian integrates fragmented data streams across government ministries and enterprise operations into a unified intelligence graph — processed, structured, and acted upon in real time, entirely within Indian borders.
              </p>
              {/* Rest fades in on scroll */}
              <motion.p 
                style={{ opacity: paragraphOpacity }}
                className="text-[#7A7A7A] font-sans text-base md:text-lg leading-relaxed mt-2"
              >
                From national security to commercial operations — Meridian delivers the decision clarity that complex environments demand.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
              animate={stage !== 'spin' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="bg-[#ff5722] text-[#000000] px-6 md:px-8 py-3 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[#FFFFFF] transition-colors">
                Request Access
              </button>
              <button className="border border-[#1A1A1A] text-[#FFFFFF] px-6 md:px-8 py-3 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[#0A0A0A] transition-colors">
                View Platform
              </button>
            </motion.div>
          </div>
        </section>

        {/* Right Grid Section (Grid Area) */}
        <motion.section 
          className="absolute right-0 top-0 h-full bg-[#0A0A0A] overflow-hidden"
          initial={hasPlayed ? { width: "60vw", zIndex: 40 } : { width: "100vw", zIndex: 60 }}
          animate={{ 
            width: stage === 'spin' ? "100vw" : "60vw",
            zIndex: stage === 'spin' ? 60 : 40 
          }}
          transition={{ 
            width: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            zIndex: { delay: 1.5 }
          }}
        >
          {/* Grid Background - Fixed size to prevent squishing */}
          <div className="absolute inset-0 w-[100vw] h-full right-0">
            <div className="absolute inset-0 kinetic-grid opacity-20"></div>
            <div className="absolute inset-0 scan-line opacity-10"></div>
            
            <motion.div 
              className="absolute top-0 bottom-0 w-full border-t border-[#ff5722]/20 bg-gradient-to-b from-[#ff5722]/5 to-transparent h-32" 
              animate={{ y: ['-100%', '300%'] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }} 
            />

            <div className="absolute inset-0 flex items-center justify-center pl-0 pt-[128px] pr-[567px]">
              <div className="w-full h-full max-w-[800px] max-h-[600px] border border-[#1A1A1A] relative bg-[#080808]/40">
                {/* Mechanical Spin Elements */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border border-[#ff5722]/30"
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 70, 
                    damping: 10, 
                    duration: 1.2 
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 border border-[#ff5722]/50 border-dashed"
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed ? { rotateY: 0 } : { rotateY: -360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 70, 
                    damping: 10, 
                    duration: 1.2 
                  }}
                />

                <motion.div 
                  className="absolute top-[20%] left-[30%] flex items-center gap-2"
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 70, 
                    damping: 10, 
                    duration: 1.2 
                  }}
                >
                  <div className="w-2 h-2 bg-[#ff5722]"></div>
                  <span className="font-mono text-[9px] text-[#FFFFFF]">NOD-098 / ACTIVE</span>
                </motion.div>

                <motion.div 
                  className="absolute bottom-[40%] right-[15%] flex items-center gap-2"
                  initial={{ rotateY: 0 }}
                  animate={hasPlayed ? { rotateY: 0 } : { rotateY: 360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 70, 
                    damping: 10, 
                    duration: 1.2 
                  }}
                >
                  <div className="w-2 h-2 bg-[#FFFFFF]"></div>
                  <span className="font-mono text-[9px] text-[#7A7A7A]">FLX-SYNC / 0.82ms</span>
                </motion.div>

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
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; INIT MERIDIAN_v4.1</p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; CONNECTING NODES...</p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; MODULES_ONLINE: HELIX / NEXUS / ORION / AEGIS</p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; DATA_SOVEREIGNTY: CONFIRMED</p>
                <p className="font-mono text-[8px] text-[#7A7A7A]">&gt; STATUS: OPERATIONAL</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Bottom Navigation Bar (Bottom Dock) - Now static at the bottom of the scrollable area */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={stage === 'ready' ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-32 md:h-40 bg-[#0A0A0A] border-t border-[#1A1A1A] z-[90] flex flex-row items-stretch mb-[48px]"
      >
        <div className="flex-1 flex items-center px-6 md:px-12 gap-8 md:gap-12 overflow-x-auto no-scrollbar">
          {[
            { id: '01', name: 'HELIX', sub: 'DATA FABRIC', path: '/systems/helix' },
            { id: '02', name: 'NEXUS', sub: 'SEC PROTOCOL', path: '/systems/nexus' },
            { id: '03', name: 'ORION', sub: 'INTEL LAYER', path: '/systems/orion' },
            { id: '04', name: 'AEGIS', sub: 'SCHEDULER', path: '/systems/aegis' },
          ].map((item) => (
            <Link 
              key={item.id}
              to={item.path} 
              className="flex flex-col gap-1 min-w-[100px] md:min-w-[120px] opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase">CORE-{item.id}</span>
              <span className="text-[#FFFFFF] font-sans text-base md:text-lg tracking-tight">{item.name}</span>
              <span className="font-mono text-[8px] text-[#ff5722]">{item.sub}</span>
            </Link>
          ))}
        </div>
        
        <div className="w-48 md:w-72 border-l border-[#1A1A1A] flex flex-col justify-center px-4 md:px-8 bg-[#080808]">
          <div className="flex justify-between items-end mb-2">
            <span className="font-mono text-[8px] md:text-[9px] text-[#7A7A7A] tracking-tighter uppercase">Forecast Delta</span>
            <span className="font-mono text-[9px] md:text-[10px] text-[#ff5722]">+12.4%</span>
          </div>
          <div className="h-12 w-full flex items-end gap-1">
            {[30, 45, 40, 60, 55].map((h, i) => (
              <div key={i} className="bg-[#1A1A1A] w-full" style={{ height: `${h}%` }}></div>
            ))}
            <motion.div className="bg-[#ff5722] w-full h-[85%]" animate={{ height: ['85%', '95%', '85%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}></motion.div>
            <motion.div className="bg-[#ff5722] w-full h-[70%]" animate={{ height: ['70%', '80%', '70%'] }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}></motion.div>
            <motion.div className="bg-[#ff5722] w-full h-[100%]" animate={{ height: ['100%', '90%', '100%'] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
