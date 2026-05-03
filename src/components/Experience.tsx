import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "DateMaroon",
    location: "Florida-based startup",
    date: "Mar 2026 – Present",
    description: "• Building and maintaining scalable data pipelines using Databricks and Azure Data Factory\n• Designing Lakehouse architecture on Azure with Delta Lake for unified batch and streaming workloads\n• Creating self-serve analytics dashboards using Apache Superset for business stakeholders\n• Working with Azure Synapse, Blob Storage, and Databricks notebooks for end-to-end data workflows",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Data Engineer Intern",
    company: "Electronic Arts",
    location: "",
    date: "Feb 2024 – Oct 2024",
    description: "• Built ETL pipelines ingesting 10K+ daily records from Asset Panda API into MongoDB, reducing processing time from 2 hours to under 10 seconds\n• Designed auto-refresh Power BI dashboards delivering real-time visibility to 15+ business units across 2,000+ employees\n• Built Flask-based Slack bot cutting IT support tickets by 60%\n• Enabled self-serve inventory entry via Google Apps Script form, reducing manual work by 75%",
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const education = [
  {
    title: "MS Data Science & Analytics",
    company: "Arizona State University",
    date: "Expected Dec 2026",
    description: "GPA: 3.72",
  },
  {
    title: "BTech Computer Science (AI)",
    company: "SRM University",
    date: "June 2024",
    description: "GPA: 8.82/10",
  },
];

const cardClass = "bg-background p-6 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Experience & Education</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <div className="absolute top-0 bottom-0 left-0 w-full bg-primary/50 origin-top" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start md:items-center`}
              >
                <div className="absolute left-[-40px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} mb-4 md:mb-0`}>
                  <div className={cardClass}>
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold font-heading text-foreground">{exp.title}</h3>
                      <div className="text-primary font-medium">{exp.company}</div>
                      <div className="text-sm text-muted-foreground mt-1 flex justify-between items-center">
                        <span>{exp.location}</span>
                        <span>{exp.date}</span>
                      </div>
                    </div>
                    <div className="text-foreground/80 whitespace-pre-line text-sm leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center py-8"
            >
              <div className="absolute left-[-40px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 text-primary-foreground shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                <GraduationCap className="w-6 h-6" />
              </div>
            </motion.div>

            {education.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start md:items-center`}
              >
                <div className="absolute left-[-40px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-primary/60 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-primary/70" />
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className={cardClass}>
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold font-heading text-foreground">{edu.title}</h3>
                      <div className="text-primary font-medium">{edu.company}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <span>{edu.date}</span>
                      </div>
                    </div>
                    <div className="text-foreground/80 text-sm leading-relaxed font-medium">
                      {edu.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
