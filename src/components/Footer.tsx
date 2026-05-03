import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-6">
          <SocialLink href="https://github.com/mrbtk1802" icon={<FaGithub className="w-5 h-5" />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/tarun-kumar06" icon={<FaLinkedin className="w-5 h-5" />} label="LinkedIn" />
          <SocialLink href="mailto:tarunbantupalli0601@gmail.com" icon={<FaEnvelope className="w-5 h-5" />} label="Email" />
          <SocialLink href="https://youtube.com/@tarunkumarbantupalli" icon={<FaYoutube className="w-5 h-5" />} label="YouTube" />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Built by Tarun Kumar Bantupalli &middot; {currentYear}
        </p>
        <p className="text-xs text-center mt-1" style={{ color: "#64748b" }}>
          Actively seeking Summer/Fall 2026 roles
        </p>
      </div>
    </footer>
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
      data-testid={`footer-social-${label.toLowerCase()}`}
    >
      {icon}
    </a>
  );
}
