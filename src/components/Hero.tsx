import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import { ArrowDown, Download } from "lucide-react";

const titles = [
  "Data Engineer",
  "ETL Architect",
  "MS Data Science @ ASU",
  "Pipeline Builder",
  "Problem Solver",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === title) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText((prev) =>
            isDeleting
              ? prev.substring(0, prev.length - 1)
              : title.substring(0, prev.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <ParticleBackground />
      
      <div className="container relative z-10 px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight relative inline-block">
            Tarun Kumar Bantupalli
            <motion.div
              className="absolute -bottom-2 left-0 h-1 md:h-2 bg-primary w-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-2xl md:text-3xl text-foreground/80 font-medium h-[40px] mb-6 flex items-center justify-center"
        >
          <span>{currentText}</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-8 bg-primary ml-1"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2"
        >
          I turn raw data into decisions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.35 }}
          className="text-sm max-w-2xl mx-auto mb-10"
          style={{ color: "#94a3b8" }}
        >
          Based in Tempe, AZ · Data Engineer @ DateMaroon · MS Data Science @ ASU
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-full transition-transform hover:scale-105"
            onClick={() => scrollTo("#projects")}
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-lg h-14 px-8 rounded-full transition-transform hover:scale-105"
            onClick={() => scrollTo("#contact")}
            data-testid="button-contact"
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-border text-foreground/80 hover:text-primary hover:border-primary text-lg h-14 px-8 rounded-full transition-all hover:scale-105 gap-2"
            asChild
            data-testid="button-resume"
          >
            <a href="/resume.pdf" download="Tarun_Kumar_Bantupalli_Resume.pdf">
              <Download className="w-5 h-5" />
              Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex items-center justify-center gap-6"
        >
          <SocialLink href="https://github.com/mrbtk1802" icon={<FaGithub className="w-6 h-6" />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/tarun-kumar06" icon={<FaLinkedin className="w-6 h-6" />} label="LinkedIn" />
          <SocialLink href="mailto:tarunbantupalli0601@gmail.com" icon={<FaEnvelope className="w-6 h-6" />} label="Email" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
      aria-label={label}
      data-testid={`link-social-${label.toLowerCase()}`}
    >
      {icon}
    </a>
  );
}
