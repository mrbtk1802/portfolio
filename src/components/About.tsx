import { motion } from "framer-motion";


const skills = [
  { category: "Languages", items: "Python, SQL, PySpark, Java, Bash" },
  { category: "Cloud", items: "AWS (S3, Redshift, Glue, Lambda, Athena), Snowflake" },
  { category: "Data Engineering & Pipelines", items: "Airflow, Kafka, dbt, ETL/ELT, Spark" },
  { category: "ML/AI", items: "PyTorch, TensorFlow, Scikit-learn, BERT, YOLO" },
  { category: "BI & Visualization", items: "Power BI, Tableau, Grafana" },
  { category: "Tools", items: "Docker, Git, MongoDB, PostgreSQL, Flask" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shrink-0 group">
              <div className="w-full h-full rounded-full shadow-[0_0_40px_rgba(245,158,11,0.35)] bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 flex items-center justify-center select-none">
                <span className="text-6xl font-bold text-white tracking-tight">TK</span>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/60 scale-[1.03] group-hover:scale-[1.06] transition-transform duration-500 ease-out pointer-events-none" />
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading">About Me</h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-10">
              I'm a Data Engineer currently pursuing my MS in Data Science & Analytics at Arizona State University (GPA: 3.72). I previously built production ETL pipelines and real-time dashboards at Electronic Arts, where I helped 2,000+ employees across 15 business units access their data instantly. I'm passionate about building systems that make data actually usable, not just stored. I'm graduating in December 2026 and actively seeking full-time Data Engineering and Data Science roles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors"
                  data-testid={`card-skill-${skill.category.toLowerCase().replace(/[^a-z]/g, '')}`}
                >
                  <h3 className="text-primary font-bold mb-1 text-sm uppercase tracking-wider">{skill.category}</h3>
                  <p className="text-sm text-foreground/90">{skill.items}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
