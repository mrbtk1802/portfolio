import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "EA Inventory Automation & Dashboarding System",
    color: "#f59e0b",
    badge: "Production at Electronic Arts",
    featured: true,
    tech: ["Python", "MongoDB", "Power BI", "Flask", "JavaScript", "REST API"],
    points: [
      "Built ETL pipeline ingesting 10K+ daily records from Asset Panda API into MongoDB, cutting processing time from 2 hours down to under 10 seconds",
      "Designed auto-refresh Power BI dashboards via ODBC, delivering real-time visibility to 15+ business units across 2,000+ employees",
      "Engineered a Flask-based Slack bot that cut IT support tickets by 60%",
      "Built Google Apps Script form reducing manual data entry by 75%",
    ],
  },
  {
    title: "Scalable Reddit ETL Pipeline on AWS",
    color: "#3b82f6",
    badge: "Cloud Data Engineering",
    featured: true,
    tech: ["AWS S3", "Glue", "Athena", "Redshift", "Airflow", "PostgreSQL", "Python"],
    points: [
      "Processed 1M+ Reddit posts/comments, reducing pipeline processing time by 60%",
      "Automated 10+ Airflow DAGs for hourly fault-tolerant refresh cycles",
      "Optimized Redshift schema for sub-second queries across 5+ analytical dimensions",
      "Implemented PostgreSQL metadata logging ensuring zero data loss",
    ],
  },
  {
    title: "Real-Time Stock Market Data Pipeline",
    color: "#10b981",
    badge: "Real-Time Streaming",
    featured: true,
    tech: ["Python", "Kafka", "PySpark", "Snowflake", "Airflow", "Grafana", "AWS"],
    points: [
      "Ingests live stock tick data from Yahoo Finance/Alpha Vantage API via Kafka streams in real time",
      "Processes and aggregates streaming data using PySpark with sub-minute latency",
      "Stores structured time-series data in Snowflake with optimized clustering for fast queries",
      "Built Grafana dashboard visualizing live price movements, volume trends, and anomaly alerts",
      "Orchestrated full pipeline with Airflow DAGs and deployed on AWS EC2",
    ],
  },
  {
    title: "Brain Tumor Detection using YOLOv8",
    color: "#ef4444",
    badge: "Computer Vision / Healthcare AI",
    tech: ["Python", "YOLOv8", "Roboflow", "OpenCV", "Google Colab"],
    points: [
      "Trained YOLOv8 on 1,000+ labeled MRI images achieving 97.5% accuracy, 95% sensitivity, 100% precision",
      "Applied preprocessing (normalization, augmentation) via Roboflow; tuned 5+ hyperparameters",
      "Evaluated with confusion matrix, F1-score of 0.96, validated on 50+ unseen test images",
    ],
  },
  {
    title: "LLM-Powered Book Recommendation Engine",
    color: "#8b5cf6",
    badge: "LLM / Generative AI",
    tech: ["Python", "LLM", "Vector Search", "Gradio", "NLP", "Sentiment Analysis"],
    points: [
      "Built vector search recommendation system on 6,810 books, improving retrieval time by 30% and accuracy by 35%",
      "Analyzed 1.2M+ words using AI-driven text classification and sentiment analysis (92% accuracy)",
      "Gradio dashboard handled 10,000+ queries, reduced search time by 50%, increased engagement by 40%",
    ],
  },
  {
    title: "TaskTracker: Serverless Productivity API",
    color: "#14b8a6",
    badge: "Serverless / Cloud",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch", "Docker"],
    points: [
      "Fully serverless REST API handling 75K+ concurrent requests with <100ms latency",
      "Integrated DynamoDB for scalable NoSQL storage across 10K+ tasks with auto-expiry",
      "Automated S3 data backup via Lambda triggers, reducing manual effort by 80%",
      "Implemented CloudWatch logging and IAM-secured endpoints",
    ],
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const extraProjects = projects.filter((p) => !p.featured);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="relative bg-card rounded-xl border shadow-lg overflow-hidden group hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
      style={{
        borderTop: `4px solid ${project.color}`,
        borderColor: project.featured ? project.color : undefined,
        borderWidth: project.featured ? "1px" : undefined,
        borderTopWidth: "4px",
      }}
      data-testid={`card-project-${index}`}
    >
      {project.featured && (
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
          ★ Featured
        </div>
      )}

      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4 pr-20">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
            {project.badge}
          </span>
        </div>

        <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-md bg-background border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
          {project.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-primary mr-2 mt-1.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading inline-block relative">
            Things I've Built
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full" />
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
              >
                {extraProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={featuredProjects.length + index} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show All Projects <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
