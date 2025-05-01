import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';
import TypingEffect from '@/hooks/TypingEffects';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaRobot, FaUserGraduate, FaPalette } from 'react-icons/fa';
import { dynamicWords } from './data/data';
import { fadeInUpVariants } from '@/hooks/motionVariants';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/gsp_cv.pdf';
    link.download = 'santhosh-gandhala-cv';
    link.click();
  };

  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex flex-col justify-between px-4 relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      <div className="absolute inset-0 z-[-3] bg-gradient-to-b from-[#090909] to-black opacity-80" />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto py-20">
        {/* TEXT CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeInUpVariants} className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Software Developer | Researcher | Robotics Enthusiast
          </motion.div>

          <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeInUpVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-primary font-mono font-extrabold">Santhosh</span> <span className="font-mono font-extrabold">Gandhala</span>
          </motion.h1>

          <motion.h3 custom={2} initial="hidden" animate="visible" variants={fadeInUpVariants} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight font-mono tracking-tight leading-tight text-left">
            Transforming <br />
            <span className="inline-block align-middle font-mono font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left">
              <TypingEffect words={dynamicWords} />
            </span>
            <br /> into functional projects and credible publications inspiring innovation and enabling intelligent systems.
          </motion.h3>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeInUpVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button size="lg" className="rounded-full" onClick={handleDownloadCV}>
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" onClick={handleConnectClick}>
              Let's Connect
            </Button>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeInUpVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            {['IEEE & Springer Published Researcher', 'Full Stack Developer', 'UI/UX Designer', 'Artist', 'Robotics Enthusiast', 'Machine Learning Engineer', 'Open Source Contributor'].map((badge, index) => (
              <div key={index} className="flex items-center text-sm text-gray-500">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOUNCING AVATAR */}
        <motion.div className="flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <div
            className="relative rounded-full bg-background flex items-center justify-center"
            style={{
              width: 'clamp(280px, 40vw, 500px)',
              height: 'clamp(280px, 40vw, 500px)',
              border: '4px solid hsl(var(--border))',
            }}
          >
            <motion.img src="/logo_001.png" alt="Avatar" className="object-contain p-2 w-full h-full" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} />

            {/* Orbiting Icons */}
            <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ transformOrigin: 'center' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}>
              <div className="absolute inset-0">
                {/* Top Icon */}
                <motion.div className="absolute top-0 left-1/2 -translate-x-1/2" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}>
                  <FaCode className="bg-primary text-white dark:text-gray-900 rounded-2xl h-12 w-12 sm:h-14 sm:w-14 p-2" />
                </motion.div>

                {/* Right Icon */}
                <motion.div className="absolute right-0 top-1/2 -translate-y-1/2" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}>
                  <FaRobot className="border-2 border-primary bg-transparent text-primary rounded-2xl h-12 w-12 sm:h-14 sm:w-14 p-2" />
                </motion.div>

                {/* Bottom Icon */}
                <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}>
                  <FaUserGraduate className="bg-primary text-white dark:text-gray-900 rounded-2xl h-12 w-12 sm:h-14 sm:w-14 p-2" />
                </motion.div>

                {/* Left Icon */}
                <motion.div className="absolute left-0 top-1/2 -translate-y-1/2" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}>
                  <FaPalette className="border-2 border-primary bg-transparent text-primary rounded-2xl h-12 w-12 sm:h-14 sm:w-14 p-2" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}>
          <ArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
