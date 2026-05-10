import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { blogs } from '@/components/data/blogs';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/monokai-sublime.css';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="pb-10">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center space-y-4 mb-12">
              <div>
                <h2 className="section-title mb-4 text-left">My Blogs</h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto text-left mb-4">Dive into insights, tutorials, and stories across software, robotics, AI, and more.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div key={blog.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-opacity-40">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
                    </div>
                    <CardHeader>
                      <CardTitle>{blog.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{blog.date}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base line-clamp-3">{blog.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => handleOpen(blog)} className="w-full">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {selectedBlog && (
              <Dialog open={isOpen} onOpenChange={handleClose}>
                <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 md:p-8">
                  <DialogContent className="w-full sm:w-[95vw] md:max-w-[90%] h-full sm:h-auto md:h-[80vh] rounded-xl overflow-hidden">
                    <DialogHeader className="space-y-2 sm:space-y-4 mb-2 sm:mb-4">
                      <DialogTitle className="text-xl sm:text-2xl font-bold mx-2 sm:mx-4">{selectedBlog.title}</DialogTitle>
                      <p className="text-xs sm:text-sm text-muted-foreground mx-2 sm:mx-4">{selectedBlog.date}</p>
                    </DialogHeader>

                    <div className="overflow-y-auto h-[calc(100%-6rem)] px-2 sm:px-4 space-y-4">
                      <div className="w-full flex justify-center px-2">
                        <div className="w-full sm:w-[50vw] rounded-lg overflow-hidden">
                          <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-auto object-cover rounded-md mb-4" />
                        </div>
                      </div>

                      <div
                        className="prose prose-gray dark:prose-invert max-w-none px-2 sm:px-4
            prose-headings:font-semibold
            prose-h1:text-2xl sm:prose-h1:text-3xl
            prose-h2:text-xl sm:prose-h2:text-2xl
            prose-h3:text-lg sm:prose-h3:text-xl
            prose-p:leading-relaxed
            prose-li:leading-relaxed prose-li:my-1
            prose-ul:pl-5 prose-ol:pl-5
            prose-pre:rounded-lg prose-pre:p-4 prose-pre:bg-zinc-100 prose-pre:text-zinc-800 dark:prose-pre:bg-gray-900
            prose-code:bg-zinc-200 prose-code:text-zinc-900 prose-code:dark:bg-gray-800 prose-code:dark:text-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
                      >
                        <ReactMarkdown children={selectedBlog.content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]} />
                      </div>
                    </div>
                  </DialogContent>
                </div>
              </Dialog>
            )}
          </div>
        </section>
        <p className="text-2xl text-gray-600 mb-4 text-center">Stay tuned for more...</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
