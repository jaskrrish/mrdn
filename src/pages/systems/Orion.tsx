import { motion } from 'motion/react';

export default function Orion() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-4">
                SYSTEM DESIGNATION // ORION-V1.0
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 uppercase">
                Orion
              </h1>
              <div className="font-mono text-xs text-[#7A7A7A] tracking-[0.1em] uppercase">
                AUTONOMOUS DATA INGESTION ENGINE
              </div>
            </div>
            
            <div className="flex flex-col border-t border-[#1A1A1A]">
              <div className="flex justify-between py-3 border-b border-[#1A1A1A]">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">STATUS</span>
                <span className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">OPERATIONAL</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#1A1A1A]">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">CLASSIFICATION</span>
                <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">INTERNAL // RESTRICTED</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#1A1A1A]">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">ONBOARD_TIME</span>
                <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">4–6 WEEKS (TARGET)</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-end h-full">
            <div className="flex gap-8 items-start relative">
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full -z-10" style={{ pointerEvents: 'none' }}>
                <motion.path d="M 80 20 L 120 20" stroke="#C45E1A" strokeWidth="1" fill="none" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -8] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
                <path d="M 80 20 L 100 20 L 100 60 L 120 60" stroke="#333333" strokeWidth="1" fill="none" />
                <path d="M 220 20 L 240 20 L 240 60 L 260 60" stroke="#333333" strokeWidth="1" fill="none" />
                <motion.path d="M 220 20 L 260 20" stroke="#C45E1A" strokeWidth="1" fill="none" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -8] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
                <motion.path d="M 360 20 L 380 20 L 380 40 L 400 40" stroke="#C45E1A" strokeWidth="1" fill="none" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -8] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
              </svg>

              <div className="flex flex-col gap-6">
                <div className="border border-[#C45E1A] px-4 py-2 font-mono text-[8px] text-[#C45E1A] tracking-[0.1em] uppercase bg-[#0A0A0A] w-24 text-center">
                  ROOT NODE
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="border border-[#C45E1A] px-4 py-2 font-mono text-[8px] text-[#C45E1A] tracking-[0.1em] uppercase bg-[#0A0A0A] w-24 text-center">
                  PATH ALPHA
                </div>
                <div className="border border-[#1A1A1A] px-4 py-2 font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase bg-[#0A0A0A] w-24 text-center">
                  PATH BETA
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="border border-[#1A1A1A] px-4 py-2 font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase bg-[#0A0A0A] w-24 text-center">
                  PATH GAMMA
                </div>
                <div className="border border-[#C45E1A] px-4 py-2 font-mono text-[8px] text-[#C45E1A] tracking-[0.1em] uppercase bg-[#0A0A0A] w-24 text-center">
                  TARGET LOCK
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-6">
                <div className="border border-[#C45E1A] px-4 py-2 font-mono text-[8px] text-[#C45E1A] tracking-[0.1em] uppercase bg-[#0A0A0A] w-28 text-center">
                  TERMINAL OUTPUT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 01 // INPUT PROCESSING Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              01 // THE PROBLEM WE SOLVE
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[#FFFFFF] max-w-md">
              Enterprise data onboarding is the single hardest problem in operational intelligence. Legacy deployment requires 6 to 8 months of manual integration work and teams of forward-deployed engineers on client premises. Orion eliminates this entirely. A hub of autonomous agents discovers, connects, extracts, and centralises client data — compressing months into weeks.
            </p>
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex justify-center items-center gap-8 h-32">
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">INPUT</div>
            <div className="text-[#333333]">→</div>
            <div className="border border-[#C45E1A] px-4 py-2 font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">INFERENCE</div>
            <div className="text-[#333333]">→</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">OUTPUT</div>
          </div>
        </div>

        {/* 02 // PIPELINE ARCHITECTURE Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            02 // ORION PIPELINE
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: '01', name: 'AGENT_DISCOVERY', active: false },
              { step: '02', name: 'CONNECTOR_GENERATION', active: false },
              { step: '03', name: '3-CONDITION_QUALITY_GATE', active: true },
              { step: '04', name: 'CENTRALISED_PROCESSING', active: false },
              { step: '05', name: 'GRAPH_FEED', active: false },
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
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] aspect-square relative flex items-center justify-center p-8 max-w-md mx-auto w-full">
            {/* Cross lines */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#1A1A1A]"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#1A1A1A]"></div>
            
            {/* Corner squares */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-[#C45E1A]"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-[#333333]"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#333333]"></div>
            <div className="absolute bottom-8 right-8 w-3 h-3 bg-[#C45E1A]"></div>
            
            {/* Center box */}
            <div className="border border-[#C45E1A] bg-[#0A0A0A] px-4 py-2 font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase z-10">
              CORE
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div>
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
                03 // HUB-AND-SPOKE ARCHITECTURE
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[#FFFFFF]">
                A centralised Orion Hub is deployed on the client's private infrastructure or a dedicated BhAi-managed node. This hub maintains persistent, authenticated connections to all approved data sources across the organisation. Discovery agents run continuously — detecting schema changes, data drift, and pipeline failures — and auto-remediate without human intervention.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-4">
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-2">AGENT_CONCURRENCY</div>
                <div className="text-2xl font-medium">Ultra-High</div>
              </div>
              <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-4">
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-2">HUB_UPTIME_TARGET</div>
                <div className="text-2xl font-medium">99.99%</div>
              </div>
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
                title: 'AGENT-DRIVEN DISCOVERY',
                desc: 'Agents scan databases, APIs, file systems, SaaS tools, and legacy ERPs — generating a complete, classified data inventory map without manual input.'
              },
              {
                id: '02',
                title: '3-CONDITION QUALITY GATE',
                desc: 'Before any data enters the live graph, it must pass: (1) Schema Validity, (2) Completeness threshold, (3) Cross-source Consistency. All three conditions required. No exceptions.'
              },
              {
                id: '03',
                title: 'AUTOMATED SOP EXECUTION',
                desc: 'Integration SOPs for every major data source type are codified and agent-executable. No reinvention per client — each deployment uses the same proven, battle-tested playbook.'
              },
              {
                id: '04',
                title: 'CONTINUOUS PIPELINE HEALTH',
                desc: 'Post-deployment, Orion monitors every connector 24/7. Broken connections are auto-remediated. Schema changes trigger automatic connector updates.'
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

        {/* 05 // DECISION GRAPH Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            05 // DECISION GRAPH (REAL-TIME RENDER)
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] h-80 relative overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
            
            {/* Graph Visual */}
            <div className="absolute inset-0 flex items-center justify-between px-16">
              {/* Node 1 */}
              <div className="w-8 h-8 bg-[#C45E1A] relative z-10"></div>
              
              {/* Node 2 Column */}
              <div className="flex flex-col gap-8 relative z-10">
                <div className="w-3 h-3 bg-[#333333]"></div>
                <div className="w-3 h-3 bg-[#C45E1A]"></div>
                <div className="w-3 h-3 bg-[#333333]"></div>
              </div>
              
              {/* Node 3 Column */}
              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-3 h-3 bg-[#333333]"></div>
                <div className="w-3 h-3 bg-[#333333]"></div>
                <div className="w-4 h-4 bg-[#C45E1A]"></div>
                <div className="w-3 h-3 bg-[#333333]"></div>
                <div className="w-3 h-3 bg-[#333333]"></div>
              </div>
              
              {/* Node 4 Column */}
              <div className="flex flex-col gap-2 relative z-10">
                <div className="w-2 h-2 bg-[#333333]"></div>
                <div className="w-2 h-2 bg-[#333333]"></div>
                <div className="w-2 h-2 bg-[#333333]"></div>
                <div className="w-3 h-3 bg-[#C45E1A]"></div>
                <div className="w-2 h-2 bg-[#333333]"></div>
                <div className="w-2 h-2 bg-[#333333]"></div>
              </div>
              
              {/* Node 5 Column */}
              <div className="flex flex-col gap-2 relative z-10">
                <div className="w-1 h-1 bg-[#333333]"></div>
                <div className="w-1 h-1 bg-[#333333]"></div>
                <div className="w-1 h-1 bg-[#333333]"></div>
                <div className="w-2 h-2 bg-[#C45E1A]"></div>
                <div className="w-1 h-1 bg-[#333333]"></div>
                <div className="w-1 h-1 bg-[#333333]"></div>
              </div>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Main Path */}
              <polyline points="10,50 30,50 50,55 70,50 90,55" fill="none" stroke="#C45E1A" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              {/* Branch Paths */}
              <polyline points="10,50 30,35" fill="none" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <polyline points="10,50 30,65" fill="none" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <polyline points="30,50 50,35" fill="none" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <polyline points="30,50 50,75" fill="none" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>

        {/* 06 // EMERGENT BEHAVIOR Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              06 // OUR UNFAIR ADVANTAGE
            </div>
            <p className="text-sm md:text-base leading-relaxed text-[#FFFFFF] max-w-md">
              Palantir Apollo requires 6 to 8 months and 10 to 15 forward-deployed engineers per client. Orion targets 4 to 6 weeks with autonomous agents and one human review checkpoint — schema approval only. The cost structure this creates opens MRDN to mid-market Indian enterprises — clients Palantir structurally cannot serve at viable economics.
            </p>
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex items-center justify-center h-48 relative">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="w-8 h-[1px] bg-[#333333]"></div>
                <div className="w-8 h-[1px] bg-[#C45E1A]"></div>
                <div className="w-8 h-[1px] bg-[#333333]"></div>
              </div>
              <div className="border border-[#1A1A1A] w-8 h-8 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#FFFFFF]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-[1px] bg-[#C45E1A]"></div>
                <div className="w-8 h-[1px] bg-[#333333]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 07 // ECOSYSTEM INTEGRATION Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            07 // ECOSYSTEM INTEGRATION
          </div>
          
          <div className="flex items-center justify-between w-full">
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">HELIX</div>
            <div className="text-[#333333] text-xs">&gt;</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">NEXUS</div>
            <div className="text-[#333333] text-xs">&gt;</div>
            <div className="border border-[#C45E1A] px-4 py-1 font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">ORION</div>
            <div className="text-[#333333] text-xs">&gt;</div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">AEGIS</div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-16 flex flex-col items-center justify-center text-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 uppercase tracking-tight">
            ORION MAKES THE MRDN STACK 4× FASTER TO DEPLOY.
          </h2>
          <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-8">
            AGENT-DRIVEN ONBOARDING. HUMAN REVIEW AT ONE CHECKPOINT ONLY.
          </div>
          <button className="bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors">
            REQUEST ACCESS
          </button>
        </div>

        <div className="flex justify-between items-center border-t border-[#1A1A1A] pt-6">
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
            © 2026 MRDN
          </div>
          <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase flex gap-4">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
            <span>SECURITY PROTOCOL</span>
          </div>
        </div>

      </div>
    </div>
  );
}

