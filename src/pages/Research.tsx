import { useEffect } from 'react';
import Header from '@/components/Header';
import ResearchSection from '@/components/ResearchSection';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { researchPapers } from '@/components/data/data';

const Research = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-4">
        <section id="research" className="py-0 bg-gray-50 dark:bg-gray-900/30">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center space-y-4 mb-12">
              {/* <h2 className="section-title">Research Publications</h2> */}
              <div>
                <h2 className="section-title mb-4 text-left">Research Publications</h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 text-left left-0">My academic contributions to the fields of machine learning, computer vision, IoT and artificial intelligence.</p>
            </motion.div>

            <div className="space-y-8">
              {researchPapers.map((paper, index) => (
                <motion.div key={paper.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="overflow-hidden border-opacity-40">
                    <CardHeader>
                      <div className="flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{paper.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {paper.conference} · {paper.date}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Status: {paper.status}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Authors</h4>
                        <p>{paper.coauthors.join(', ')}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Abstract</h4>
                        <p className={`text-gray-600 dark:text-gray-300 ${expandedId === paper.id ? '' : 'line-clamp-3'}`}>{paper.abstract}</p>
                        {paper.abstract.length > 100 && (
                          <button onClick={() => toggleExpand(paper.id)} className="text-primary text-sm mt-1 hover:underline">
                            {expandedId === paper.id ? 'Show less' : 'Read more'}
                          </button>
                        )}
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords.map((keyword, i) => (
                            <Badge key={i} variant="secondary" className="font-normal">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-4">
                      {paper.link && (
                        <Button variant="outline" asChild>
                          <a href={paper.link} target="_blank" rel="noopener noreferrer">
                            View Publication
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mt-10 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Interested in Research Collaboration?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">I'm always open to new collaborative research opportunities in ML, computer vision, and AI.</p>
                </div>
                <Button size="lg" onClick={() => navigate('/contact')}>
                  Contact for Collaboration
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
