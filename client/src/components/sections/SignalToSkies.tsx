import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/emailjs";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function SignalToSkies() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await sendContactEmail(data);
      toast({
        title: "Signal sent to the skies!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      href: "mailto:gouravsapaliga125@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gourav-sapaliga",
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      href: "https://github.com/shadowofdominance",
    },
    {
      icon: "fab fa-twitter",
      label: "Twitter",
      href: "https://twitter.com/not_gourav007",
    },
  ];

  return (
    <section id="signal" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-falcon-storm to-falcon-night"></div>

      {/* Animated feathers floating */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 left-1/2 opacity-25"
          animate={{ y: [0, -20, 20, 0], rotate: [0, 360] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <i className="fas fa-feather text-falcon-sky text-xl"></i>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-falcon-cloud"
            initial={{ opacity: 1 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.1,
                onComplete: () => setIsAnimated(true),
              },
            }}
            viewport={{ once: true }}
          >
            <div
              className={`talon-scratch-container ${
                isAnimated ? "talon-scratch-active" : ""
              }`}
            >
              <div className="talon-scratch-overlay"></div>
              <div className="talon-impact-flash"></div>
              <span className="talon-hidden relative z-1">
                SIGNAL TO THE SKIES
              </span>
            </div>
            <motion.span
              className="block text-2xl text-falcon-steel font-inter font-normal mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Send a message to the aerie
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-falcon-sky mx-auto"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="glass-effect rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-falcon-cloud font-semibold">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="bg-falcon-storm border-falcon-steel text-falcon-cloud cursor-feather focus:border-falcon-sky"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-falcon-cloud font-semibold">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@domain.com"
                          className="bg-falcon-storm border-falcon-steel text-falcon-cloud cursor-feather focus:border-falcon-sky"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-falcon-cloud font-semibold">
                      Subject
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-falcon-storm border-falcon-steel text-falcon-cloud cursor-feather focus:border-falcon-sky">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="collaboration">
                          Project Collaboration
                        </SelectItem>
                        <SelectItem value="hiring">Hiring Inquiry</SelectItem>
                        <SelectItem value="speaking">
                          Speaking Engagement
                        </SelectItem>
                        <SelectItem value="mentorship">Mentorship</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-falcon-cloud font-semibold">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={6}
                        placeholder="Share your thoughts, ideas, or project details..."
                        className="bg-falcon-storm border-falcon-steel text-falcon-cloud cursor-feather focus:border-falcon-sky resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-12 py-4 bg-falcon-blue hover:bg-falcon-sky transition-all duration-300 rounded-full font-orbitron font-bold text-lg cursor-feather transform hover:scale-105 animate-pulse-glow"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? "SENDING..." : "SEND SIGNAL"}
                    <i className="fas fa-paper-plane ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-falcon-blue to-falcon-sky rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </form>
          </Form>

          {/* Contact Alternatives */}
          <div className="mt-12 pt-8 border-t border-falcon-steel/20">
            <h3 className="font-orbitron font-bold text-xl text-falcon-cloud text-center mb-8">
              Alternative Flight Paths
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-3 px-6 py-3 bg-falcon-storm hover:bg-falcon-blue rounded-lg transition-all duration-300 cursor-feather group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i
                    className={`${link.icon} text-falcon-sky group-hover:text-white`}
                  ></i>
                  <span className="text-falcon-cloud group-hover:text-white">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
