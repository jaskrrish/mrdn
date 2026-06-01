import { Link } from 'react-router-dom';

export default function Aegis() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            SYSTEM IDENTIFICATION: AEGIS-01
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Aegis.
          </h1>
          <p className="text-[#7A7A7A] text-sm md:text-base max-w-2xl leading-relaxed">
            Multilingual AI and language intelligence layer. Powered by proprietary large language models — trained on Indian data, in Indian languages, for Indian operational contexts.
          </p>
        </div>

        {/* SYSTEM EVALUATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              WHAT AEGIS DOES
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF]">
              Aegis is the natural-language interface that sits on top of the entire MRDN stack. Any operator — a government analyst in Tamil Nadu, a plant supervisor in Rajasthan, a logistics manager in Punjab — can query their intelligence graph in their native language and receive structured, contextualised responses. No SQL. No technical training required.
            </p>
          </div>

          {/* Staircase architecture diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-52">
              {/* Helix / Nexus — base layer */}
              <div className="absolute bottom-0 left-0 w-44 h-28 border border-[#1A1A1A] bg-[#0A0A0A] z-10 flex items-end p-3">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">HELIX / NEXUS</span>
              </div>
              {/* Bhai NLP — middle layer */}
              <div className="absolute bottom-8 left-14 w-44 h-28 border border-[#333333] bg-[#0D0D0D] z-20 flex items-end p-3">
                <span className="font-mono text-[10px] text-[#555555] tracking-[0.1em] uppercase">BHAI NLP</span>
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
                L1: MULTILINGUAL_QUERY_INGEST
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[45%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L2: INTENT_CLASSIFICATION
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 w-[85%]">
              <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                © 2026 MRDN
              </div>
            </div>
            
            <div className="bg-[#C45E1A]/10 border border-[#C45E1A] p-3 w-[85%] relative">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                L3: GRAPH_RETRIEVAL // HELIX + NEXUS
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#C45E1A]"></div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[70%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L4: CONTEXTUAL_REASONING
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-full">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L5: RESPONSE_SYNTHESIS
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[55%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L6: OUTPUT — NATIVE LANGUAGE DELIVERY
              </div>
            </div>
          </div>
        </div>

        {/* DEVIATION PROTOCOL Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
            DEVIATION PROTOCOL
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-3xl">
            Aegis isolates deviations by establishing a high-fidelity baseline of normal operations. When a signal bifurcates from the projected trajectory, the system tags the exact moment of variance for tactical response.
          </p>
        </div>



        {/* CONTEXTUAL EVALUATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              PROPRIETARY DATA MOAT
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-2xl">
              Aegis is trained on a continuously growing corpus of uniquely Indian data — from Helix's government graph, Nexus's enterprise graph, live market signals, and analytical outputs. Every additional client and every additional data stream makes Aegis smarter. No foreign model trained on non-Indian data can replicate this.
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
                INDIA_TRAINING_CORPUS
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
            Aegis makes MRDN the only intelligence platform operable by any Indian — in any language.
          </h2>
          <Link to="/contact" className="bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors">
            REQUEST ACCESS
          </Link>
          <div className="font-mono text-[9px] text-[#7A7A7A] tracking-[0.1em] uppercase mt-6">
            POWERED BY MRDN LLM // SOVEREIGN INFERENCE
          </div>
        </div>

      </div>
    </div>
  );
}

