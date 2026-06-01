import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import whiteLogo from '../assets/white-logo.png';

export default function Header() {
  const [isSystemsHovered, setIsSystemsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'PLATFORM', path: '/' },
    { name: 'SYSTEMS', path: '/systems' },
    { name: 'MISSION', path: '/mission' },
    { name: 'IDLY', path: 'https://idly.world', external: true },
    { name: 'CONTACT', path: '/contact' },
  ];

  const systemSubItems = [
    { name: 'ORION', path: '/systems/orion' },
    { name: 'NEXUS', path: '/systems/nexus' },
    { name: 'HELIX', path: '/systems/helix' },
    { name: 'AEGIS', path: '/systems/aegis' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      <nav className="relative w-full border-b border-[#1A1A1A] bg-[#080808]/90 backdrop-blur-md h-[56px] flex items-center z-20">
        <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 w-full max-w-[1600px] mx-auto">

          {/* Logo */}
          <Link
            to="/"
            className="flex-none flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={whiteLogo} alt="MRDN" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center gap-8 xl:gap-12 items-center h-full">
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
                    className="font-sans text-[13px] font-medium tracking-[0.1em] h-full flex items-center transition-all duration-300 text-[#7A7A7A] hover:text-[#FFFFFF]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `font-sans text-[13px] font-medium tracking-[0.1em] h-full flex items-center transition-all duration-300 relative group ${
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

          {/* Desktop Access Button */}
          <div className="hidden lg:flex flex-none">
            <button className="border border-[#1A1A1A] text-[#FFFFFF] px-6 py-2 font-sans text-[12px] font-semibold tracking-[0.05em] hover:bg-[#ff5722] hover:text-[#000000] hover:border-[#ff5722] transition-all duration-300 uppercase">
              Access
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 flex-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-px bg-[#FFFFFF]"
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-[#FFFFFF]"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-[#FFFFFF]"
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Desktop Systems Submenu */}
      <AnimatePresence>
        {isSystemsHovered && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onMouseEnter={() => setIsSystemsHovered(true)}
            onMouseLeave={() => setIsSystemsHovered(false)}
            className="hidden lg:flex absolute top-[56px] left-0 w-full h-[40px] bg-[#0A0A0A] border-b border-[#1A1A1A] items-center justify-center z-10"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[56px] left-0 w-full bg-[#080808]/98 backdrop-blur-md border-b border-[#1A1A1A] z-20"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-[#111111]">
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-4 font-mono text-[12px] tracking-[0.15em] text-[#7A7A7A] hover:text-[#FFFFFF] hover:bg-[#0A0A0A] transition-colors uppercase"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block px-6 py-4 font-mono text-[12px] tracking-[0.15em] uppercase transition-colors ${
                          isActive
                            ? 'text-[#ff5722] bg-[#0A0A0A]'
                            : 'text-[#7A7A7A] hover:text-[#FFFFFF] hover:bg-[#0A0A0A]'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                  {item.name === 'SYSTEMS' && (
                    <div className="bg-[#050505] flex">
                      {systemSubItems.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `flex-1 text-center py-3 font-mono text-[9px] tracking-[0.15em] uppercase border-r border-[#111111] last:border-r-0 transition-colors ${
                              isActive ? 'text-[#ff5722]' : 'text-[#7A7A7A] hover:text-[#ff5722]'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-6 py-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="border border-[#1A1A1A] text-[#FFFFFF] font-mono text-[12px] tracking-[0.05em] hover:bg-[#ff5722] hover:text-[#000000] hover:border-[#ff5722] transition-all uppercase w-full py-3"
                >
                  Access
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
