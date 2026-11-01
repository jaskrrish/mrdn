import { Link } from 'react-router-dom';

export default function Aegis() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            SYSTEM IDENTIFICATION: AEGIS · PREVIEW
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Aegis.
          </h1>
          <p className="text-[#7A7A7A] text-sm md:text-base max-w-2xl leading-relaxed">
            The place to ask Mrdn questions in plain words. Every answer comes with the records it used and how it was worked out.
          </p>
        </div>

        {/* SYSTEM EVALUATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              WHAT AEGIS DOES
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF]">
              A plant supervisor asks "Which orders will miss Friday, and why?" Aegis answers from the linked picture, lists the orders, and shows the rows it used: the late truck, the stock count, the production run waiting on parts. No SQL and no dashboards to learn.
            </p>
          </div>

          {/* Staircase architecture diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-52">
              {/* Helix / Nexus — base layer */}
              <div className="absolute bottom-0 left-0 w-44 h-28 border border-[#1A1A1A] bg-[#0A0A0A] z-10 flex items-end p-3">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">NEXUS PICTURE</span>
              </div>
              {/* Checked plan — middle layer */}
              <div className="absolute bottom-8 left-14 w-44 h-28 border border-[#333333] bg-[#0D0D0D] z-20 flex items-end p-3">
                <span className="font-mono text-[10px] text-[#555555] tracking-[0.1em] uppercase">CHECKED PLAN</span>
              </div>
              {/* Aegis — top layer */}
              <div className="absolute bottom-16 left-28 w-44 h-28 border border-[#C45E1A] bg-[#0A0A0A] z-30 flex items-end p-3">
                <span className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">AEGIS</span>
              </div>
            </div>
          </div>
        </div>

        {/* SIGNAL PROCESSING LAYERS Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            AEGIS CAPABILITY LAYERS
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[60%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L1: QUESTION_IN_PLAIN_WORDS
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[45%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L2: MATCH_TO_A_CHECKED_PLAN
              </div>
            </div>
            
            <div className="bg-[#C45E1A]/10 border border-[#C45E1A] p-3 w-[85%] relative">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                L3: RUN_ON_THIS_MACHINE // NEXUS
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#C45E1A]"></div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[70%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L4: ANSWER_FROM_MATCHED_ROWS
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-full">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L5: CITE_EVERY_RECORD_ID
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[55%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L6: OR SAY "I CAN'T ANSWER THAT"
              </div>
            </div>
          </div>
        </div>

        {/* DEVIATION PROTOCOL Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
            WHEN IT CAN'T ANSWER
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-3xl">
            A question the data can't support gets a plain "I can't answer that", not a guess. Record numbers such as ORD-24330 or TRK-17 open the record itself.
          </p>
        </div>



        {/* CONTEXTUAL EVALUATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              NOTHING LEAVES THE MACHINE
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-2xl">
              In the demo build, answers are worked out on the laptop itself, with no internet. Answering freely typed questions with a language model is built and in testing; the demo shown today answers ready-made questions from the data.
            </p>
          </div>
          
          <div className="h-48 relative flex items-center justify-center">
            <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="60" y1="20" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="35" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="50" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="65" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="80" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute left-[75%] top-[50%] -translate-y-1/2 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#C45E1A]"></div>
              <div className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">
                <span className="sm:hidden">EVIDENCE</span>
                <span className="hidden sm:inline">EVIDENCE_CHAIN</span>
              </div>
            </div>
          </div>
        </div>

        {/* OPERATIONAL CHAIN Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            OPERATIONAL CHAIN
          </div>
          
          <div className="flex items-center justify-between w-full">
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">ORION</div>
            <div className="h-[1px] bg-[#1A1A1A] flex-1 mx-4"></div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">NEXUS</div>
            <div className="h-[1px] bg-[#1A1A1A] flex-1 mx-4"></div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">HELIX</div>
            <div className="h-[1px] bg-[#1A1A1A] flex-1 mx-4"></div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">AEGIS</div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-16 flex flex-col items-center justify-center text-center mt-8">
          <h2 className="text-3xl md:text-4xl font-medium text-[#FFFFFF] mb-8">
            Ask in plain words. See the rows behind every answer.
          </h2>
          <Link to="/contact" className="bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors">
            BOOK A DEMO
          </Link>
          <div className="font-mono text-[9px] text-[#7A7A7A] tracking-[0.1em] uppercase mt-6">
            PREVIEW ON SYNTHETIC DATA · DEMO BY APPOINTMENT
          </div>
        </div>

      </div>
    </div>
  );
}

