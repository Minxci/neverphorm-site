
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' }); // idle, submitting, success, error

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const roles = [
    { title: "3D Artist & Animator" },
    { title: "Systems & Tools Developer" },
    { title: "Audio Designer" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'submitting', message: '' });

    try {
      await pb.collection('contact_submissions').create({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }, { $autoCancel: false });

      setStatus({ type: 'success', message: 'Your message has been sent successfully. We will be in touch soon!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Project Neverphorm</title>
        <meta 
          name="description" 
          content="Reach out, collaborate, or connect with Project Neverphorm. View future roles and submit inquiries." 
        />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* 1. CONTACT INTRO */}
          <motion.section 
            className="text-center pt-12"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Want to reach out, collaborate, submit an idea, or connect with Project Neverphorm? Send us a message below.
            </p>
          </motion.section>

          {/* 2. JOIN OUR TEAM */}
          <motion.section 
            className="bg-card/30 border border-border/50 rounded-2xl p-8 md:p-10 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Project Neverphorm is not actively hiring right now, but this page will eventually list future collaboration opportunities, open roles, and ways to get involved with the studio.
            </p>
          </motion.section>

          {/* 3. ACTIVELY LOOKING FOR */}
          <motion.section 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Actively Looking For</h2>
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-muted/50 border border-border/50 text-muted-foreground font-medium">
              No active openings at this time.
            </div>
          </motion.section>

          {/* 4. FUTURE ROLES */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">Future Roles</h2>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {roles.map((role) => (
                <motion.div key={role.title} variants={fadeInUp}>
                  <Card className="h-full bg-card/20 border-border/40 hover:bg-card/40 hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-foreground/90">
                        {role.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-2">
                        Details coming soon.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 5. CONTACT FORM */}
          <motion.section
            id="contact-form"
            className="scroll-mt-24"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Card className="bg-card/50 border-border/50 shadow-xl shadow-black/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold">Send a Message</CardTitle>
                <CardDescription className="text-base mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {status.type === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">{status.message}</p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => setStatus({ type: 'idle', message: '' })}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Your name" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/50 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/50 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select 
                        required 
                        value={formData.subject} 
                        onValueChange={handleSubjectChange}
                      >
                        <SelectTrigger className="bg-background/50 border-border/50 focus:ring-primary">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Join the Team / Collaboration">Join the Team / Collaboration</SelectItem>
                          <SelectItem value="Submit a Game Idea">Submit a Game Idea</SelectItem>
                          <SelectItem value="Contract / Business Inquiry">Contract / Business Inquiry</SelectItem>
                          <SelectItem value="Feedback">Feedback</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="How can we help you?" 
                        rows={6} 
                        required 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus-visible:ring-primary resize-none"
                      />
                    </div>

                    {status.type === 'error' && (
                      <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                        <AlertCircle className="w-4 h-4" />
                        <p>{status.message}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold transition-all active:scale-[0.98]"
                      disabled={status.type === 'submitting'}
                    >
                      {status.type === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactUsPage;
