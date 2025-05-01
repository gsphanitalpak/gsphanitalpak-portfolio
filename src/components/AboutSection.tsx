import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import Timeline from './Timeline';
import { professionalExperiences, researchInterests, achievements, skillCategories } from './data/data';
import { containerVariants, fadeInUpVariants, itemVariants } from '@/hooks/motionVariants';

export default function AboutSection({ isLeft, color }: { isLeft: boolean; color: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="about" className="relative py-20 px-4 bg-secondary/50 dark:bg-gray-800/20 overflow-hidden object-cover">
      <motion.div className="container-custom relative z-10 space-x-4 object-cover" custom={0} initial="hidden" whileInView="visible" variants={fadeInUpVariants}>
        <motion.div className="object-cover">
          <div className="grid gap-12 items-center object-cover">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants} className="relative flex flex-col lg:flex-row gap-8 items-start min-h-[500px] max-w-[1200px] mx-auto overflow-hidden">
              {/* Wobbly Blob Background */}
              {/* <motion.div className="absolute -top-10 -left-10 w-80 h-80 bg-primary/50 dark:bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-random-float z-0" style={{ pointerEvents: 'none' }} /> */}

              {/* Image Section */}
              <div className="relative z-10 flex justify-center w-full lg:w-1/2">
                <img src="about_image.png" alt="Santhosh Image" className="object-cover rounded-[300px] border-4 border-primary w-full max-w-[500px] mx-auto" />
              </div>

              {/* About Me Content */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={itemVariants} className="relative z-10 space-y-4 text-left w-full max-w-[600px]">
                <div>
                  <h2 className="section-title mb-4">About Me</h2>
                  <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
                </div>

                {/* Scrollable Paragraph Box */}
                <div className="relative p-3 bg-white/20 dark:bg-black/20 rounded-xl border border-primary/30 max-h-[360px]  min-h-[180px] overflow-hidden">
                  <div className={`text-lg text-gray-700 dark:text-gray-300 text-justify pr-2 overflow-y-auto min-h-[180px] transition-all duration-300 ${isExpanded ? 'max-h-[320px]' : 'max-h-[100px]'}`}>
                    {isExpanded ? (
                      <>
                        I am a passionate <span className="text-primary font-mono font-bold">Computer Science & Engineering</span> graduate from <b>Symbiosis Institute of Technology, Symbiosis International (Deemed University), India</b>, with a deep focus on <span className="text-primary font-mono font-bold">AI, Machine Learning, Robotics, IoT, and Full-stack development</span>. My journey has been marked by a blend of <b>research</b> and <b>real-world development</b>, where I’ve led several innovative projects and contributed to impactful papers in renowned conferences like VISHWACON and ICRIC. Throughout my career, I’ve developed scalable solutions, including <b>robotics</b> and <b>AI systems</b>, optimized web applications, and enhanced embedded systems. My technical skills span across{' '}
                        <span className="text-primary font-mono font-bold">Python, React, Java, AWS & DevOps</span>, enabling me to tackle complex problems and deliver efficient, functional solutions. With a passion for <b>advancing automation</b>, <b>security</b>, and <b>robotic interventions</b>, I am constantly exploring new technologies to push boundaries and drive change, always striving to bridge the gap between research and practical applications.
                      </>
                    ) : (
                      <>
                        I am a passionate <span className="text-primary font-mono font-bold">Computer Science & Engineering</span> graduate from <b>Symbiosis Institute of Technology</b>. Worked on various projects and research gaining skills in AI, ML, Robotics and more...
                      </>
                    )}
                  </div>
                </div>

                {/* Button Outside Box */}
                <div className="text-right">
                  <button onClick={() => setIsExpanded((prev) => !prev)} className="text-primary font-semibold focus:outline-none bg-white/70 dark:bg-black/40 px-4 py-1 rounded shadow-sm">
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
              {/* Highlights */}
              <div>
                <h3 className="sub-section-title font-light mb-2">Highlights</h3>
                <div className="w-16 h-0.5 bg-primary rounded-full mb-6"></div>
              </div>
              <div className="grid lg:flex gap-8 relative">
                <div className="space-y-6">
                  {/* Education */}
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Education</h3>
                      <p className="text-gray-600 dark:text-gray-400">Bachelor of Technology </p>
                      <div className="text-gray-600 dark:text-gray-400 break-words">
                        <span>
                          <p> Major: Computer Science and Engineering</p>
                          <span>
                            <p>Honors Specialization: Cloud Computing</p>
                          </span>
                          <span>
                            <p>Symbiosis International, Pune, India</p>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Goal */}
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Professional Goal</h3>
                      <p className="text-gray-600 dark:text-gray-400">Innovating at the crossroads of software engineering, machine learning, and robotics.</p>
                    </div>
                  </div>
                </div>
                {/* Research Interests */}
                <div className="flex items-start">
                  <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Research Interests</h3>
                    <div className="text-gray-600 dark:text-gray-400">
                      <div className="space-y-6">
                        {Object.entries(researchInterests).map(([category, topics], idx) => (
                          <div key={idx}>
                            <h4 className="text-lg font-light text-accent  mb-2">{category}</h4>
                            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1">
                              {topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={itemVariants} className="text-left">
              {/* Experience */}
              <section id="experience">
                <div className="flex items-start">
                  <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Professional Experience</h3>
                  </div>
                </div>
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1280px] mx-auto px-6">
                  {professionalExperiences.map((exp, index) => (
                    <div key={index} className="w-full min-h-[320px] perspective cursor-pointer" onClick={() => handleFlip(index)}>
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
                        {/* Front Side */}
                        <div className="absolute inset-0 bg-[#e7e7e7] dark:bg-gray-900 rounded-3xl shadow-xl p-6 backface-hidden flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-light text-primary mb-2">{exp.title}</h3>
                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4">{exp.company}</p>
                          </div>
                          <p className="text-right text-xs text-primary font-medium">Click to flip</p>
                        </div>

                        {/* Back Side */}
                        <div className="absolute inset-0 border-primary border-2 text-primary rounded-3xl shadow-xl p-6 backface-hidden rotate-y-180 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-light  mb-4">{exp.title}</h3>
                            <ul className="text-xs text-gray-800 dark:text-white space-y-2 break-words">
                              {exp.description.map((desc, i) => (
                                <li key={i}>• {desc}</li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-right text-xs mt-4 font-medium">Click to flip back</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          </div>
          <div className="text-center">
            <Button className="m-6 justify-self-center" onClick={() => setShowTimeline((prev) => !prev)}>
              {showTimeline ? 'Hide Timeline' : 'Show Timeline'}
            </Button>
            <div>
              {showTimeline && (
                <>
                  <h3 className="sub-section-title font-light text-left mb-2">Timeline</h3>
                  <div className="w-16 h-0.5 bg-primary rounded-full mb-6"></div>
                </>
              )}
            </div>
            {showTimeline && <Timeline />}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={itemVariants} className="mt-20 m-10">
          <div>
            <h3 className="sub-section-title font-light mb-2">Skills & Expertise</h3>
            <div className="w-16 h-0.5 bg-primary rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 border-b">
                    <h4 className="font-semibold text-lg">{category.name}</h4>
                  </div>

                  {/* Subcategories */}
                  <div className="p-4 space-y-4">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex}>
                        <h5 className="font-medium text-sm text-primary mb-2">{subcategory.name}</h5>
                        <div className="flex flex-wrap gap-2">
                          {subcategory.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={itemVariants} className="mt-20 text-center m-10">
          <div>
            <h3 className="sub-section-title font-light mb-2 text-left">Achievements & Recognitions</h3>
            <div className="w-16 h-0.5 bg-primary rounded-full mb-6"></div>
          </div>
          <div className="space-y-4 w-full max-w-full">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-primary text-lg font-semibold mb-2">{achievement.title}</h4>
                <ul className="list-disc list-inside space-y-1 text-md text-gray-700 dark:text-gray-300">
                  {achievement.description.map((point, i) => (
                    <li key={i} className="pl-4 list-none text-left flex items-center">
                      <span className="text-primary mr-3 text-xs align-middle">{'\u25B6'}</span>
                      <div>{point}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
