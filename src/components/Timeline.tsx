'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { arrowClasses, colorMap, timelineData } from './data/data';

const Timeline = () => {
  return (
    <div className="relative w-full px-6 py-20 bg-secondary/50 dark:bg-gray-800/20 text-gray-900 dark:text-[#e7e7e7] overflow-hidden rounded-3xl">
      {/* Vertical Line - Desktop */}
      <div className="hidden sm:block absolute left-1/2 h-[90%] w-2 bg-slate-600 dark:bg-slate-400 transform -translate-x-1/2 z-0 rounded-full" />

      {/* Vertical Line - Mobile */}
      <div className="sm:hidden absolute mr-3 h-[90%] w-1 bg-slate-600 dark:bg-slate-400 transform -translate-x-1/2 z-0 rounded-full" />

      {timelineData.map((item, index) => {
        const isLeft = index % 2 !== 0;
        const color = colorMap[item.color];
        const bgOpaqueColor = color.bg
          .split(' ')
          .map((c) => c.replace(/\/\d+$/, '')) // Remove opacity suffix from both variants
          .join(' ');
        const arrowClass = arrowClasses[item.color]?.[isLeft ? 'right' : 'left'];

        return (
          <motion.div key={item.year + index} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative w-full max-w-5xl mx-auto my-12">
            {/* Mobile View */}
            <div className="sm:hidden relative w-full ml-1">
              <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className={cn('w-5 h-5 rounded-full border-2 bg-slate-600 dark:bg-slate-400 border-slate-400 dark:border-slate-400', color.border)} />
              </div>
              {/* Mobile Card */}
              <div className={cn('p-6 rounded-xl border-2 shadow-lg mb-8', color.border, color.bg)}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn('w-10 h-10 rounded-full flex-shrink-0')}>
                    <img src={item.picture[0]} className="w-full h-full dark:hidden" alt={item.title} />
                    <img src={item.picture[1]} className="w-full h-full hidden dark:block" alt={item.title} />
                  </div>
                  <div>
                    <div className={cn('text-xl font-bold', color.text)}>{item.year}</div>
                    <div className={cn('text-lg font-semibold', color.text)}>{item.title}</div>
                  </div>
                </div>
                <ul className="space-y-2 text-left">
                  {item.events.map((e, i) => (
                    <li key={i} className="text-sm leading-snug text-gray-900 dark:text-[#e7e7e7]">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop View*/}
            <div
              className="hidden sm:flex flex-col sm:flex-row w-full max-w-5xl mx-auto"
              style={{
                flexDirection: isLeft ? 'row' : 'row-reverse',
              }}
            >
              <div className="w-full sm:w-1/2 flex justify-center items-center relative z-10 mb-6 sm:mb-0">
                <div className={cn('absolute h-1 z-0 border-t-2 border-dotted border-slate-500 w-[calc(45%-3rem)]', isLeft ? 'left-full mr-3 -translate-x-full' : 'right-full ml-3 translate-x-full')} />
                <div className={cn('relative w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-lg', color.border, bgOpaqueColor)}>
                  <img src={item.picture[0]} className="w-20 h-20 dark:hidden" alt={item.title} />
                  <img src={item.picture[1]} className="w-20 h-20 hidden dark:block" alt={item.title} />
                </div>
              </div>
              <div className={cn('w-full sm:w-1/2 text-sm leading-relaxed px-16 relative z-10', isLeft ? 'text-left' : 'text-right')}>
                <div className={cn('text-2xl font-bold mb-2', color.text)}>{item.year}</div>
                <div className={cn('text-lg font-semibold mb-4', color.text)}>{item.title}</div>
                <div className="space-y-4">
                  {item.events.map((e, i) => (
                    <div key={i} className={cn(i % 2 === 1 ? 'font-medium text-md' : 'text-gray-900 dark:text-[#e7e7e7]', 'leading-snug')}>
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-row">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={cn('w-6 h-6 rounded-full border-4 bg-slate-600 dark:bg-slate-400', color.border)} />
                </div>
                {/*  */}
                <div className="hidden">
                  {/* These dummy divs to  force Tailwind to include the classes */}
                  <div className="border-l-cyan-600 dark:border-l-cyan-300 border-r-cyan-600 dark:border-r-cyan-300" />
                  <div className="border-l-amber-600 dark:border-l-amber-300 border-r-amber-600 dark:border-r-amber-300" />
                  <div className="border-l-rose-600 dark:border-l-rose-300 border-r-rose-600 dark:border-r-rose-300" />
                  <div className="border-l-lime-600 dark:border-l-lime-300 border-r-lime-600 dark:border-r-lime-300" />
                  <div className="border-l-sky-600 dark:border-l-sky-300 border-r-sky-600 dark:border-r-sky-300" />
                </div>
                <div className={cn('absolute top-1/2 transform -translate-y-1/2 w-0 h-0 rotate-180 mx-3', isLeft ? 'left-[calc(50%+6px)] border-t-[12px] border-b-[12px] border-r-[20px] border-l-0' : 'right-[calc(50%+6px)] border-t-[12px] border-b-[12px] border-l-[20px] border-r-0', 'border-t-transparent border-b-transparent', arrowClass)} />{' '}
              </div>{' '}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
