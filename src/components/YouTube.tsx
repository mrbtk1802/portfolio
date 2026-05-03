import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const channels = [
  {
    title: "Tarun Kumar Bantupalli",
    subtitle: "Masters Journey · US Student Life · Data Science",
    description: "Documenting my Masters journey at ASU, sharing real experiences, data science learnings, and life as an international student in the US.",
    pill: "🎓 Masters Journey Documented",
    link: "https://www.youtube.com/@tarunkumarbantupalli",
  },
  {
    title: "Telugu Tech Spot",
    subtitle: "Tech Reviews · Mobiles · Laptops · Apps in Telugu",
    description: "Technology deep-dives in Telugu, covering mobiles, laptops, apps, and the latest in tech for 90M+ Telugu speakers.",
    pill: "📱 Telugu Tech Community",
    link: "https://www.youtube.com/@telugutechspot",
  },
];

export default function YouTube() {
  return (
    <section id="youtube" className="py-24 px-6 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaYoutube className="text-red-500 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Beyond the Code</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">Sharing knowledge, experiences, and tech reviews.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {channels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group block bg-background rounded-2xl border border-border p-8 relative overflow-hidden"
              data-testid={`link-youtube-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-5 right-5 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(220,38,38,0.4)] group-hover:bg-red-500 transition-colors">
                <Play className="w-4 h-4 text-white ml-0.5 fill-current" />
              </div>

              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mb-6 shadow-lg border border-border group-hover:border-red-500/30 transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-red-400 transition-colors">
                  {channel.title}
                </h3>

                <p className="text-sm font-medium mb-4" style={{ color: "#f59e0b" }}>
                  {channel.subtitle}
                </p>

                <p className="text-foreground/70 leading-relaxed mb-5">
                  {channel.description}
                </p>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {channel.pill}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
