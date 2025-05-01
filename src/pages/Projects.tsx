import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/components/data/data';
import { ProjectType } from '@/components/data/data';
import { filters } from '@/hooks/constants';

const Projects = () => {
  const [filter, setFilter] = useState<ProjectType>('All Projects');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter((project) => filter === 'All Projects' || project.type.includes(filter));
  const displayedProjects = [...filteredProjects].reverse();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="pb-4">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center space-y-4 mb-12">
              <div>
                <h2 className="section-title mb-4 text-left">My Projects</h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto text-left mb-4">Explore all of my work — from research to real-world systems. These projects highlight my skills in software development, robotics, ML, IoT, and more.</p>

              {/* Filters */}
              <Card className="overflow-hidden flex">
                <div className="bg-primary/10 flex items-center justify-center px-2">
                  <h4 className="font-semibold rotate-[-90deg] whitespace-nowrap">Filters</h4>
                </div>
                <CardContent className="p-4 w-full">
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filterType) => (
                      <Badge key={filterType} onClick={() => setFilter(filterType)} variant={filter === filterType ? 'default' : 'outline'} className="cursor-pointer rounded-full px-3 py-1 text-sm transition-all hover:scale-105">
                        {filterType}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }} onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}>
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-opacity-40">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {project.type.map((type) => (
                          <Badge key={type} className="bg-primary/90 hover:bg-primary">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="outline" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="font-normal">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardContent>

                    {(project.github?.trim() || project.live?.trim()) && (
                      <CardFooter className="flex justify-between gap-4">
                        {project.github?.trim() && (
                          <Button variant="outline" className="flex-1" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              Src Code / Files
                            </a>
                          </Button>
                        )}
                        {project.live?.trim() && (
                          <Button className="flex-1" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              View Project
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
