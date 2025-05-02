import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex  gap-10 justify-between">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
              {darkMode ? <img src="final_logo_white.svg" alt="Santhosh Logo Dark" className="h-20 w-auto" /> : <img src="final_logo_black.svg" alt="Santhosh Logo Light" className="logo h-20 w-auto" />}
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Building innovative solutions at the intersection of software development and academic research.</p>
            <div className="flex space-x-4 mt-6">
              {['GitHub', 'LinkedIn', 'Google Scholar', 'Email'].map((social) => {
                let svgIcon;
                let href;

                switch (social) {
                  case 'GitHub':
                    svgIcon = (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 text-primary" fill="currentColor">
                        <g transform="scale(1.2) translate(-2.5 -2.5)">
                          <path
                            d="M16 1C7.715 1 1 7.715 1 16c0 6.638 4.318 12.254 10.302 14.233.754.139 1.03-.327 1.03-.725
        0-.357-.013-1.303-.02-2.558-4.193.912-5.077-2.021-5.077-2.021-.685-1.74-1.673-2.202-1.673-2.202-1.368-.935.104-.916.104-.916
        1.512.106 2.308 1.553 2.308 1.553 1.345 2.305 3.528 1.638 4.388 1.253.137-.975.527-1.638.959-2.016-3.346-.38-6.863-1.673-6.863-7.444
        0-1.645.588-2.987 1.552-4.04-.156-.379-.673-1.903.147-3.969 0 0 1.265-.405 4.146 1.542a14.425 14.425 0 013.777-.507c1.282.006
        2.573.174 3.778.507 2.88-1.947 4.142-1.542 4.142-1.542.822 2.066.305 3.59.15 3.969.967 1.053 1.55 2.395 1.55 4.04
        0 5.782-3.522 7.06-6.879 7.432.542.47 1.026 1.4 1.026 2.823 0 2.037-.019 3.677-.019 4.177
        0 .402.27.872 1.04.724C26.684 28.252 31 22.637 31 16c0-8.285-6.715-15-15-15z"
                          />
                        </g>
                      </svg>
                    );
                    href = 'https://github.com/gsphanitalpak';
                    break;
                  case 'LinkedIn':
                    svgIcon = (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8h3v12H4V8z
      M5.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z
      M10 8h3v2h.1c.4-.8 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.5V20h-3v-5c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V20h-3V8z
    "
                        />
                      </svg>
                    );
                    href = 'www.linkedin.com/in/santhosh-phanitalpak-gandhala';
                    break;
                  case 'Google Scholar':
                    svgIcon = (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 32 32" fill="currentColor" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="
    M6 12l10-5 10 5-10 5-10-5
    M16 12a8 8 0 1 1 0 16 8 8 0 0 1 0-16z
  "
                        />
                      </svg>
                    );
                    href = 'https://scholar.google.com/citations?user=GZn0hCAAAAAJ&hl=en&oi=ao';
                    break;
                  case 'Email':
                    svgIcon = (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18c1.1 0 1.99.9 1.99 2L21 18c0 1.1-.89 2-1.99 2H3c-1.1 0-1.99-.9-1.99-2L3 8c0-1.1.89-2 1.99-2z M3 6l9 6 9-6" />
                      </svg>
                    );
                    href = 'mailto:gsanthoshphanitalpak@gmail.com';
                    break;
                  default:
                    break;
                }

                return (
                  <Button key={social} variant="ghost" size="icon" className="rounded-full h-10 w-10 group" asChild>
                    <a href={href} aria-label={social} className="block">
                      <span className="sr-only">{social}</span>
                      <div className="p-2 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">{svgIcon}</div>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Research', path: '/research' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">© {currentYear} Santhosh Phanitalpak Gandhala. All rights reserved.</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0">Made with ❤️ using React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
