import { Link } from 'react-router-dom';
import NexusConstellationGraph from "../../components/NexusConstellationGraph";
import DemoShot from '../../components/DemoShot';
import alertShot from '../../assets/shots/mrdn-alert.webp';
import ontologyShot from '../../assets/shots/mrdn-ontology.webp';

export default function Nexus() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="flex-1">
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              SYSTEM_PROTOCOL: NEXUS · ENTERPRISE TRACK
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tight leading-none mb-2">
              NEXUS
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tight leading-none text-[#C45E1A]">
              INTELLIGENCE
            </h1>
            <div className="border-l-2 border-[#C45E1A] pl-6 mt-12">
              <p className="text-xl md:text-2xl text-[#7A7A7A] max-w-2xl leading-relaxed">
                One linked picture of a business: its orders, plants, trucks, suppliers and stock, and how each one connects to the rest. Built for Indian manufacturers, distributors and logistics firms.
              </p>
            </div>
          </div>

        </div>

        {/* 01 / CONNECTED OPERATIONAL INTELLIGENCE Section */}
        <div className="max-w-3xl">
          <div className="font-mono text-sm text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            01 / CONNECTED OPERATIONAL INTELLIGENCE
          </div>
          <p className="text-lg text-[#7A7A7A] leading-relaxed mb-12">
            Procurement, production, dispatch and accounts usually keep their own files. Nexus links them: which supplier's load feeds which production run, which run fills which order, which truck carries it. When a supplier truck breaks down, you can follow the chain to the exact orders it puts at risk, with the records that prove it.
          </p>

          <div className="flex flex-col gap-4 border-t border-[#1A1A1A] pt-6">
            <div className="flex justify-between items-center py-3 border-b border-[#1A1A1A]">
              <span className="font-mono text-sm text-[#7A7A7A] tracking-[0.1em] uppercase">SAMPLE_COMPANY</span>
              <span className="font-mono text-sm text-[#FFFFFF] tracking-[0.1em] uppercase text-right">FICTIONAL · 8 FILES</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#1A1A1A]">
              <span className="font-mono text-sm text-[#7A7A7A] tracking-[0.1em] uppercase">LINKED_PICTURE</span>
              <span className="font-mono text-sm text-[#FFFFFF] tracking-[0.1em] uppercase text-right">800 RECORDS · 2,181 LINKS</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#1A1A1A]">
              <span className="font-mono text-sm text-[#7A7A7A] tracking-[0.1em] uppercase">RUNS_ON</span>
              <span className="font-mono text-sm text-[#FFFFFF] tracking-[0.1em] uppercase text-right">THIS MACHINE · NO INTERNET</span>
            </div>
          </div>
        </div>


        {/* CONTEXT_LAYER_EXPANSION Section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-between items-end gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] uppercase tracking-tight break-all sm:break-normal">
              THE_LINKED_PICTURE
            </h2>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
              ILLUSTRATIVE
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border border-[#1A1A1A] bg-[#0A0A0A] h-[400px] relative overflow-hidden">
              <NexusConstellationGraph />
            </div>
            
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex-1">
                <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
                  DEMO READOUT
                </div>
                <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase leading-loose flex flex-col gap-2">
                  <div>&gt; 8 FILES READ</div>
                  <div>&gt; 21 KINDS OF THINGS</div>
                  <div>&gt; 800 RECORDS · 2,181 LINKS</div>
                  <div>&gt; 2 ALERTS TO ACT ON</div>
                  <div className="text-[#444444]">SAMPLE COMPANY · SYNTHETIC DATA</div>
                </div>
              </div>
              
              <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex-1">
                <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
                  AGENTS IN THE DEMO
                </div>
                <div className="flex flex-col gap-8">
                  <div className="border-l-2 border-[#C45E1A] pl-4">
                    <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-1">LATE SUPPLIER TRUCK → ORDERS AT RISK</div>
                    <div className="font-sans text-lg font-bold text-[#FFFFFF] uppercase tracking-tight">INBOUND_WATCH</div>
                  </div>
                  <div className="border-l-2 border-[#333333] pl-4">
                    <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-1">TRUCK IN THE WORKSHOP → IDLE TRUCK SWAPPED IN</div>
                    <div className="font-sans text-lg font-bold text-[#FFFFFF] uppercase tracking-tight">FLEET_WATCH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM_INTEGRATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight border-t-2 border-[#C45E1A] pt-6 mb-6">
              AGENTS_DRAFT_THE_FIX
            </h2>
            <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
              Agents read field reports, chats and letters, merge repeated remarks about the same incident into one alert, and show what it puts at risk. They also check the data itself: orders dated in the future, records that match no supplier. For each alert they draft the next step, such as a message or a purchase order to an approved backup supplier.
            </p>
          </div>

          <div className="lg:col-span-2 bg-[#C45E1A] text-[#000000] p-8 sm:p-16 md:p-24 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">
              A PERSON APPROVES EVERY ACTION.
            </h2>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase max-w-lg">
              APPROVING RECORDS THE DECISION AND UPDATES THE PLAN. NOTHING IS SENT ANYWHERE ON ITS OWN.
            </div>
          </div>
        </div>

        {/* REAL DEMO SCREENS */}
        <section className="mb-32 flex flex-col gap-16">
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase block">PLATFORM_DEMO // MRDN CORE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold uppercase tracking-tight">The ontology view</h3>
              <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
                Eight files from a fictional manufacturer, read and linked on a laptop: 21 kinds of things, 800 records and 2,181 links. Click any kind to see its records.
              </p>
              <DemoShot src={ontologyShot} alt="Mrdn Core ontology view of a fictional company, built from eight files" label="NEXUS // ONTOLOGY VIEW" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold uppercase tracking-tight">An alert, with its evidence</h3>
              <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
                Three field reports mention the same gearbox failure. Mrdn joins them into one alert, traces the 17 open commitments it touches, and waits for a person to approve.
              </p>
              <DemoShot src={alertShot} alt="Mrdn Core alert tracing a supplier truck breakdown to the orders it puts at risk, on synthetic data" label="NEXUS // AGENT ALERT" />
            </div>
          </div>
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-10 sm:p-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 uppercase tracking-tight">
              See it on your own operations.
            </h2>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-8">
              PREVIEW ON SYNTHETIC DATA · DEMO BY APPOINTMENT
            </div>
            <Link to="/contact" className="bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors">
              BOOK A DEMO
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

