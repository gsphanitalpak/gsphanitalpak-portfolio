import { useEffect, useState } from 'react';

/**
 * Always activates the glow effect when the user scrolls.
 *
 * @returns isGlowActive - true when user scrolls, indicating the glow should be active
 */
export function useScrollGlowActive(): boolean {
  const [isGlowActive, setIsGlowActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsGlowActive(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isGlowActive;
}
