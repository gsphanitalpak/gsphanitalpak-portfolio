import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: '✉️',
    title: 'Email',
    value: 'gsanthoshphanitalpak@gmail.com',
    link: 'mailto:gsanthoshphanitalpak@gmail.com',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'santhosh-phanitalpak-gandhala',
    link: 'https://www.linkedin.com/in/santhosh-phanitalpak-gandhala',
  },
  {
    icon: '🧑🏽‍💻',
    title: 'GitHub',
    value: 'github.com/gsphanitalpak',
    link: 'https://github.com/gsphanitalpak',
  },
  {
    icon: '☎️',
    title: 'Mobile',
    value: '+91 8179439677',
    link: ' ',
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="pb-4 px-10 mt-0 bg-background">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center space-y-4 mb-12">
          <div className=" text-left">
            <h2 className="section-title mb-4 text-left">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Have a question or want to work together? Feel free to reach out!</p>
        </motion.div>

        <div className="grid ">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }} className="flex-grow space-y-6 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <p className=" text-gray-600 dark:text-gray-400">{info.title}</p>
                      <h3 className="font-medium">{info.value}</h3>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>Schedule a virtual meeting with me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Virtual Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday, 3:00 PM - 5:00 PM IST</p>
                  </div>
                  <Button variant="outline">Book a Slot</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Quick Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400">15-minute introduction call</p>
                  </div>
                  <Button variant="outline">Schedule</Button>
                </div>
              </CardContent>
            </Card> */}
          </motion.div>

          {/* <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Name
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="How can I help you?" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} rows={5} required />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
