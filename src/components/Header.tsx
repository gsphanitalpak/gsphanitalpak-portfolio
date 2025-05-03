import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, XIcon } from 'lucide-react';
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Project', href: '/projects' },
  { name: 'Research', href: '/research' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

useEffect(() => {
  // Check the stored theme or default to light mode
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    setDarkMode(true);
  } else {
    document.documentElement.classList.remove('dark');
    setDarkMode(false);
  }
}, []);

const toggleTheme = () => {
  setDarkMode((prevMode) => {
    const newMode = !prevMode;
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    return newMode;
  });
};

return (
  <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 pt-4 transition-all duration-300 ${scrolled ? 'bg-transparent' : 'backdrop-blur-md'}`}>
    <div className="nav-bar flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
        {darkMode ? <img src="final_logo_white.svg" alt="Santhosh Logo Dark" className="h-20 w-auto" /> : <img src="final_logo_black.svg" alt="Santhosh Logo Light" className="logo h-20 w-auto" />}
      </Link>

      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link key={item.name} to={item.href} className="text-sm font-medium hover:text-primary transition-colors link-underline">
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
          {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>

        <Button variant="default" className="hidden md:inline-flex" onClick={() => window.open('gsp_cv.pdf', '_blank')}>
          Resume
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" onClick={() => setIsMobileMenuOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>
    </div>

    {/* Fullscreen Mobile Nav */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[999] min-h-screen w-screen bg-white dark:bg-gray-950 flex flex-col pt-24 px-6 items-center justify-start space-y-8 text-lg">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 bg-primary/20 hover:bg-primary rounded-full shadow-lg transition-all duration-200" aria-label="Close menu">
            <XIcon className="w-5 h-5" />
          </Button>

          {navItems.map((item) => (
            <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-medium hover:text-primary link-underline">
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.header>
);
}
