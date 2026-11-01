import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import DemoShot from '../../components/DemoShot';
import reviewShot from '../../assets/shots/mrdn-review.webp';

export default function Orion() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-4">
                SYSTEM DESIGNATION // ORION · PREVIEW
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 uppercase">
                Orion
              </h1>
              <div className="font-mono text-xs text-[#7A7A7A] tracking-[0.1em] uppercase">
                READS YOUR FILES AS THEY ARE
              </div>
            </div>
            
          </div>

          <div className="hidden sm:flex items-center justify-end h-full">
            <div className="flex gap-10 items-start relative">
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full -z-10" style={{ pointerEvents: 'none' }}>
                <motion.path d="M 120 26 L 168 26" stroke="#C45E1A" strokeWidth="1.5" fill="none" strokeDasharray="5 4" animate={{ strokeDashoffset: [0, -9] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />
                <path d="M 120 26 L 144 26 L 144 82 L 168 82" stroke="#333333" strokeWidth="1" fill="none" />
                <path d="M 304 26 L 328 26 L 328 82 L 352 82" stroke="#333333" strokeWidth="1" fill="none" />
                <motion.path d="M 304 26 L 352 26" stroke="#C45E1A" strokeWidth="1.5" fill="none" strokeDasharray="5 4" animate={{ strokeDashoffset: [0, -9] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />
              </svg>

              <div className="flex flex-col gap-8">
                <div className="border-2 border-[#C45E1A] px-5 py-5 font-mono text-[11px] text-[#C45E1A] tracking-[0.12em] uppercase bg-[#0A0A0A] w-36 text-center leading-relaxed">
                  YOUR FILES
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="border-2 border-[#C45E1A] px-5 py-5 font-mono text-[11px] text-[#C45E1A] tracking-[0.12em] uppercase bg-[#0A0A0A] w-36 text-center leading-relaxed">
                  COLUMN PROFILER
                </div>
                <div className="border border-[#2A2A2A] px-5 py-5 font-mono text-[11px] text-[#7A7A7A] tracking-[0.12em] uppercase bg-[#0A0A0A] w-36 text-center leading-relaxed">
                  LINK FINDER
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="border border-[#2A2A2A] px-5 py-5 font-mono text-[11px] text-[#7A7A7A] tracking-[0.12em] uppercase bg-[#0A0A0A] w-36 text-center leading-relaxed">
                  EVIDENCE
                </div>
                <div className="border-2 border-[#C45E1A] px-5 py-5 font-mono text-[11px] text-[#C45E1A] tracking-[0.12em] uppercase bg-[#0A0A0A] w-36 text-center leading-relaxed">
                  YOUR REVIEW
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 01 // INPUT PROCESSING Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-base md:text-xl text-[#C45E1A] tracking-[0.15em] uppercase mb-6 font-bold">
              01 // THE PROBLEM WE SOLVE
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[#FFFFFF] max-w-md">
              Getting a company's data into one place is usually the slowest part of any operations project. Orion starts from the files the company already has: spreadsheets, CSV, JSON, Tally exports, chat exports, letters, PDF and Word documents, messy Indian business data included.
            </p>
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex justify-center items-center gap-8 h-32">
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">MESSY FILES</div>
            <div className="text-[#333333]">→</div>
            <div className="border border-[#C45E1A] px-4 py-2 font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">ORION</div>
            <div className="text-[#333333]">→</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">ONE LINKED PICTURE</div>
          </div>
        </div>

        {/* 02 // PIPELINE ARCHITECTURE Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            02 // ORION PIPELINE
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: '01', name: 'READ_FILES', active: false },
              { step: '02', name: 'PROFILE_COLUMNS', active: false },
              { step: '03', name: 'FIND_LINKS_WITH_EVIDENCE', active: false },
              { step: '04', name: 'PERSON_CONFIRMS', active: true },
              { step: '05', name: 'BUILD_THE_PICTURE', active: false },
            ].map((item, i) => (
              <div key={i} className={`pt-4 border-t ${item.active ? 'border-[#C45E1A]' : 'border-[#1A1A1A]'}`}>
                <div className={`font-mono text-[10px] tracking-[0.1em] uppercase mb-2 ${item.active ? 'text-[#C45E1A]' : 'text-[#7A7A7A]'}`}>
                  STEP {item.step}
                </div>
                <div className={`font-mono text-[10px] tracking-[0.1em] uppercase ${item.active ? 'text-[#C45E1A]' : 'text-[#FFFFFF]'}`}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03 // LAYERED REASONING Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] aspect-square relative max-w-md mx-auto w-full overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C45E1A" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#C45E1A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Hub ambient glow */}
              <circle cx="150" cy="150" r="60" fill="url(#hubGlow)" />

              {/* Animated spoke lines — drawn before nodes so rects mask endpoints */}
              <motion.line x1="150" y1="150" x2="150" y2="60" stroke="#C45E1A" strokeWidth="0.8" strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -7] }} transition={{ repeat: Infinity, duration: 1.0, ease: "linear" }} />
              <motion.line x1="150" y1="150" x2="229" y2="105" stroke="#C45E1A" strokeWidth="0.8" strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -7] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} />
              <motion.line x1="150" y1="150" x2="229" y2="195" stroke="#C45E1A" strokeWidth="0.8" strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -7] }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} />
              <motion.line x1="150" y1="150" x2="150" y2="240" stroke="#C45E1A" strokeWidth="0.8" strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -7] }} transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }} />
              <motion.line x1="150" y1="150" x2="71" y2="195" stroke="#C45E1A" strokeWidth="0.8" strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -7] }} transition={{ repeat: Infinity, duration: 1.3, ease: "linear" }} />
              <motion.line x1="150" y1="150" x2="71" y2="105" stroke="#C45E1A" strokeWidth="0.8" strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -7] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />

              {/* Spoke nodes */}
              <rect x="118" y="50" width="64" height="20" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
              <text x="150" y="64" textAnchor="middle" fill="#666666" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="1">SPREADSHEET</text>

              <rect x="197" y="95" width="64" height="20" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
              <text x="229" y="109" textAnchor="middle" fill="#666666" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="1">TALLY_EXPORT</text>

              <rect x="197" y="185" width="64" height="20" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
              <text x="229" y="199" textAnchor="middle" fill="#666666" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="1">CHAT_EXPORT</text>

              <rect x="118" y="230" width="64" height="20" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
              <text x="150" y="244" textAnchor="middle" fill="#666666" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="1">LETTERS_PDF</text>

              <rect x="39" y="185" width="64" height="20" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
              <text x="71" y="199" textAnchor="middle" fill="#666666" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="1">CSV_JSON</text>

              <rect x="39" y="95" width="64" height="20" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
              <text x="71" y="109" textAnchor="middle" fill="#666666" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="1">WORD_DOC</text>

              {/* Active connection dots on spoke nodes */}
              <circle cx="119" cy="51" r="2.5" fill="#C45E1A" opacity="0.8" />
              <circle cx="198" cy="96" r="2.5" fill="#C45E1A" opacity="0.8" />
              <circle cx="198" cy="186" r="2.5" fill="#C45E1A" opacity="0.8" />
              <circle cx="119" cy="231" r="2.5" fill="#C45E1A" opacity="0.8" />
              <circle cx="40" cy="186" r="2.5" fill="#C45E1A" opacity="0.8" />
              <circle cx="40" cy="96" r="2.5" fill="#C45E1A" opacity="0.8" />

              {/* Center hub node — drawn last to sit above all lines */}
              <rect x="114" y="132" width="72" height="36" fill="#0A0A0A" stroke="#C45E1A" strokeWidth="1.5" />
              <text x="150" y="147" textAnchor="middle" fill="#C45E1A" fontFamily="Courier New, monospace" fontSize="8" fontWeight="700" letterSpacing="2">ORION</text>
              <text x="150" y="162" textAnchor="middle" fill="#C45E1A" fontFamily="Courier New, monospace" fontSize="8" fontWeight="700" letterSpacing="2">READER</text>

              {/* Footer status */}
              <text x="150" y="291" textAnchor="middle" fill="#333333" fontFamily="Courier New, monospace" fontSize="6" letterSpacing="2">SOURCES: FILES ON THIS MACHINE</text>
            </svg>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <div className="font-mono text-base md:text-xl text-[#C45E1A] tracking-[0.15em] uppercase mb-6 font-bold">
                03 // ONE READER, ANY FILE
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[#FFFFFF]">
                Orion runs on the machine where the files are. It reads each one, works out what every column holds (an id, a number, money, a date, a place, a category or free text), and finds which files describe the same things. In the demo build nothing is uploaded: it makes no internet request at all.
              </p>
            </div>
          </div>
        </div>

        {/* 04 // CORE ATTRIBUTES Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            04 // CORE ATTRIBUTES
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: '01',
                title: 'COLUMN PROFILING',
                desc: 'Every column is read as an id, a number, money, a date, a place, a category or free text, so mixed-up exports still make sense.'
              },
              {
                id: '02',
                title: 'EVIDENCE FOR EVERY LINK',
                desc: 'When two files describe the same things, Orion shows the matching values. Strong matches are kept; weaker ones wait for you to keep or drop.'
              },
              {
                id: '03',
                title: 'REMEMBERS YOUR CHOICES',
                desc: 'Keep or drop a link once and Orion applies the same choice to the next file of the same shape.'
              },
              {
                id: '04',
                title: 'TESTED AT SCALE',
                desc: '50,000 rows read and linked in about seven seconds on a laptop, in the demo build.'
              }
            ].map((attr) => (
              <div key={attr.id} className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex flex-col gap-4">
                <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                  CHARACTERISTIC {attr.id}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{attr.title}</h3>
                <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* 05 // EMERGENT BEHAVIOR Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              05 // A PERSON STAYS IN CHARGE
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm md:text-base leading-relaxed text-[#FFFFFF] max-w-md">
                Orion proposes; your team confirms. Each kind of thing it found is listed with where it came from and how many records it holds, and every name can be changed before the picture is rebuilt.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#7A7A7A] max-w-md">
                The screen shown here is that review step in the demo build, on a fictional company's data.
              </p>
            </div>
          </div>
          
          <DemoShot src={reviewShot} alt="Mrdn Core review step listing the kinds of things Orion found, on synthetic data" label="ORION // REVIEW STEP" />
        </div>

        {/* 06 // ECOSYSTEM INTEGRATION Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            06 // ECOSYSTEM INTEGRATION
          </div>
          
          <div className="flex items-center justify-between w-full">
            <div className="border border-[#C45E1A] px-4 py-1 font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">ORION</div>
            <div className="text-[#333333] text-xs">&gt;</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">NEXUS</div>
            <div className="text-[#333333] text-xs">&gt;</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">HELIX</div>
            <div className="text-[#333333] text-xs">&gt;</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">AEGIS</div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-16 flex flex-col items-center justify-center text-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 uppercase tracking-tight">
            ORION TURNS A FOLDER OF FILES INTO ONE LINKED PICTURE.
          </h2>
          <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-8">
            DEMO READY · BY APPOINTMENT · SYNTHETIC DATA
          </div>
          <Link to="/contact" className="bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors">
            BOOK A DEMO
          </Link>
        </div>

        <div className="flex justify-between items-center border-t border-[#1A1A1A] pt-6">
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
            © 2026 ZAIO PRIVATE LIMITED
          </div>
          <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase flex flex-wrap gap-4">
            <a href="https://www.zaio.in/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF]">PRIVACY POLICY</a>
            <a href="https://www.zaio.in/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF]">TERMS OF USE</a>
            <a href="https://www.zaio.in/trust" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF]">TRUST &amp; COMPLIANCE</a>
          </div>
        </div>

      </div>
    </div>
  );
}

