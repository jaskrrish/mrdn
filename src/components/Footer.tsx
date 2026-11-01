export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-[48px] border-t border-[#1A1A1A] bg-[#000000] flex justify-between items-center gap-4 px-4 sm:px-6 z-50">
      <a
        href="https://www.zaio.in"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono tracking-[0.05em] uppercase text-[10px] text-[#7A7A7A] hover:text-[#FFFFFF] transition-colors whitespace-nowrap"
      >
        © 2026 Zaio Private Limited
      </a>
      <div className="hidden md:flex gap-4">
        <span className="font-mono tracking-[0.05em] uppercase text-[10px] text-[#7A7A7A]">
          Demo ready · by appointment · synthetic data
        </span>
      </div>
      <div className="font-mono tracking-[0.05em] uppercase text-[10px] text-[#C45E1A] whitespace-nowrap">
        Mrdn Core · Demo ready
      </div>
    </footer>
  );
}
