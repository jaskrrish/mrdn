import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const [isSystemsHovered, setIsSystemsHovered] = useState(false);

  const navItems = [
    { name: 'PLATFORM', path: '/' },
    { name: 'SYSTEMS', path: '/systems' },
    { name: 'INTELLIGENCE', path: '/intelligence' },
    { name: 'MISSION', path: '/mission' },
    { name: 'IDLY', path: 'https://idly.world', external: true },
    { name: 'CONTACT', path: '/contact' },
  ];

  const systemSubItems = [
    { name: 'HELIX', path: '/systems/helix' },
    { name: 'NEXUS', path: '/systems/nexus' },
    { name: 'ORION', path: '/systems/orion' },
    { name: 'AEGIS', path: '/systems/aegis' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      <nav className="relative w-full border-b border-[#1A1A1A] bg-[#080808]/90 backdrop-blur-md h-[56px] flex items-center z-20">
        <div className="flex items-center justify-between h-full px-8 w-full max-w-[1600px] mx-auto">
          <div className="flex-none w-[150px]">
            <Link to="/" className="font-mono text-[15px] font-bold tracking-[0.2em] text-[#FFFFFF] uppercase hover:text-[#ff5722] transition-colors">
              MERIDIAN
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center gap-12 items-center h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="h-full"
                onMouseEnter={() => item.name === 'SYSTEMS' && setIsSystemsHovered(true)}
                onMouseLeave={() => item.name === 'SYSTEMS' && setIsSystemsHovered(false)}
              >
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[14px] font-medium tracking-[0.1em] h-full flex items-center transition-all duration-300 relative group text-[#7A7A7A] hover:text-[#FFFFFF]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-sans text-[14px] font-medium tracking-[0.1em] h-full flex items-center transition-all duration-300 relative group ${
                        isActive ? 'text-[#ff5722]' : 'text-[#7A7A7A] hover:text-[#FFFFFF]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        {isActive && (
                          <motion.div 
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff5722]"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div className="flex-none w-[150px] flex justify-end">
            <button className="border border-[#1A1A1A] text-[#FFFFFF] px-6 py-2 font-sans text-[12px] font-semibold tracking-[0.05em] hover:bg-[#ff5722] hover:text-[#000000] hover:border-[#ff5722] transition-all duration-300 uppercase">
              Access
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSystemsHovered && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseEnter={() => setIsSystemsHovered(true)}
            onMouseLeave={() => setIsSystemsHovered(false)}
            className="absolute top-[56px] left-0 w-full h-[40px] bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center justify-center z-10"
          >
            <div className="flex gap-12">
              {systemSubItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className="font-mono text-[11px] tracking-[0.2em] text-[#7A7A7A] hover:text-[#ff5722] transition-colors"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
