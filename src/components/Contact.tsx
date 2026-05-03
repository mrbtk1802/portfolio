import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeneepd";

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactCards = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "tarunbantupalli0601@gmail.com",
    href: "mailto:tarunbantupalli0601@gmail.com",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "tarun-kumar06",
    href: "https://linkedin.com/in/tarun-kumar06",
  },
  {
    icon: <FaGithub className="w-6 h-6" />,
    title: "GitHub",
    value: "mrbtk1802",
    href: "https://github.com/mrbtk1802",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Let's Build Something</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex flex-col items-center justify-center gap-2">
            <span>Open to Data Engineering, Data Science, and SDE roles.</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" /> Currently based in Tempe, AZ.
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border p-6 rounded-xl flex flex-col items-center text-center hover:border-primary/50 transition-colors"
              data-testid={`card-contact-${card.title.toLowerCase()}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground break-all">{card.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 max-w-3xl mx-auto shadow-xl"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <CheckCircle className="w-14 h-14 text-green-500" />
              <p className="text-lg font-semibold text-green-500">
                Thanks! I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="bg-background border-border"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background border-border"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hi Tarun, I have an opportunity..."
                  className="min-h-[150px] bg-background border-border resize-y"
                  required
                  data-testid="textarea-message"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please email me directly at tarunbantupalli0601@gmail.com
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2"
                data-testid="button-submit"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
