
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Database,
  BrainCircuit,
  BarChart3,
  Code2,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    category: "Data Science",
    subtitle: "Machine Learning",
    description:
      "A predictive machine learning solution designed to identify customers who may leave a business and support customer retention decisions.",
    problem: "Customer retention and revenue loss.",
    approach:
      "Data cleaning, exploratory analysis, feature engineering and classification modelling.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/JosephAnalyst",
    code: "ML / 01",
  },
  {
    id: 2,
    title: "Healthcare Insurance Cost Prediction",
    category: "Data Science",
    subtitle: "Predictive Analytics",
    description:
      "A regression project exploring how demographic and lifestyle factors influence medical insurance charges.",
    problem: "Understanding and estimating insurance costs.",
    approach:
      "Data cleaning, exploratory analysis and regression modelling.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
    github:
      "https://github.com/JosephAnalyst/Health-care-insurance-cost-prediction",
    code: "DS / 02",
  },
  {
    id: 3,
    title: "Cryptocurrency ETL Pipeline",
    category: "Data Engineering",
    subtitle: "Cloud Data Engineering",
    description:
      "An ETL project focused on extracting cryptocurrency data, transforming raw data and preparing it for downstream analysis.",
    problem: "Preparing raw cryptocurrency data for analysis.",
    approach:
      "ETL processing and distributed data transformation.",
    technologies: ["Python", "PySpark", "Azure", "ETL"],
    github:
      "https://github.com/JosephAnalyst/crypto-etl-pyspark-azure",
    code: "DE / 03",
  },
  {
    id: 4,
    title: "HR Employee Insights Dashboard",
    category: "Analytics",
    subtitle: "Business Intelligence",
    description:
      "An employee analytics dashboard designed to turn workforce data into meaningful business insights.",
    problem: "Understanding workforce trends and employee metrics.",
    approach:
      "Data analysis, KPI tracking and dashboard development.",
    technologies: ["Power BI", "Excel", "Data Visualization"],
    github:
      "https://github.com/JosephAnalyst/HR_Employee-insights-Dashboard",
    code: "BI / 04",
  },
];

const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Data Science",
    icon: BrainCircuit,
    items: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    items: ["ETL Pipelines", "PySpark", "Azure", "SQL"],
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    items: ["Power BI", "Excel", "Data Visualization", "Statistics"],
  },
];

const filters = [
  "All",
  "Data Science",
  "Data Engineering",
  "Analytics",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#" className="text-xl font-bold tracking-tight">
            Joseph<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="mailto:your.email@example.com"
            className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-300 md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 md:hidden">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize text-gray-300 hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-14 px-6 pb-20 pt-32 md:flex-row">

        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Data Science & Data Engineering
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Turning Data Into
            <span className="block text-cyan-400">Meaningful Insights.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            I am Joseph, a data professional passionate about
            transforming raw data into actionable insights,
            building predictive models and developing data-driven
            solutions to real-world problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-300"
            >
              Explore Projects <ArrowRight size={18} />
            </a>

            <a
              href="mailto:josejuma397@gmail.com"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-10 flex gap-6 text-sm font-semibold text-gray-400">
  <a
    href="https://github.com/Jb-datalab"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/joseph-juma-166b6440b"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400"
  >
    LinkedIn ↗
  </a>

  <a
    href="mailto:josejuma397@gmail.com"
    className="hover:text-cyan-400"
  >
    Email
  </a>
</div>
        </motion.div>

        {/* PROFILE PICTURE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex flex-1 justify-center"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-600/10 p-3 shadow-[0_0_80px_rgba(34,211,238,0.12)] md:h-[390px] md:w-[390px]">

            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#10263a] bg-[#10263a]">
              <Image
                src="/profile.jpg"
                alt="Joseph - Data professional"
                fill
                priority
                sizes="(max-width: 768px) 288px, 390px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-3 right-0 rounded-2xl border border-white/10 bg-[#10263a] px-5 py-3 shadow-xl">
              <p className="text-sm font-semibold text-cyan-400">
                Data Professional
              </p>
              <p className="text-xs text-gray-400">
                Analytics · Science · Engineering
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-y border-white/5 bg-[#0a1727] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Curious About Data.
              <span className="block text-cyan-400">Driven By Impact.</span>
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              I enjoy working with data to solve problems, discover
              patterns and support better decision-making. My interests
              span data analytics, machine learning and data engineering.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Through practical projects and continuous learning, I am
              building my ability to develop end-to-end data solutions
              that connect data collection, processing, analysis and
              meaningful business outcomes.
            </p>

            <a
              href="https://github.com/JosephAnalyst"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Explore my GitHub <ArrowRight size={18} />
            </a>
          </div>
          </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              My Expertise
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Tools & Technologies
            </h2>
            <p className="mt-4 text-gray-400">
              Technologies I use and continue to develop my skills in.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#0c1b2d] p-7 transition hover:-translate-y-2 hover:border-cyan-400/40"
                >
                  <Icon size={30} className="mb-6 text-cyan-400" />
                  <h3 className="mb-5 text-xl font-bold">{skill.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="projects" className="scroll-mt-24 border-y border-white/5 bg-[#0a1727] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Selected Work
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-gray-400">
                Practical projects exploring real-world data challenges.
              </p>
            </div>

            <a
              href="https://github.com/JosephAnalyst"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all on GitHub <ExternalLink size={16} />
            </a>
          </div>

          {/* FILTERS */}
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "border-cyan-400 bg-cyan-400 text-[#07111f]"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="grid gap-7 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1c2e] transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                {/* PROJECT VISUAL */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/10">
                  <div className="absolute left-6 top-5 text-xs font-semibold tracking-widest text-cyan-300">
                    {project.code}
                  </div>

                  <div className="flex items-end gap-3 opacity-70 transition duration-500 group-hover:scale-110">
                    {[45, 80, 55, 110, 75, 130].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}px` }}
                        className="w-7 rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-300"
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-5 right-6 rounded-full border border-white/10 bg-[#07111f]/70 px-4 py-2 text-xs text-cyan-300 backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className="p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {project.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Problem
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Approach
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-4"
                  >
                    View Project <ArrowRight size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 px-7 py-16 text-center md:px-16">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Build Something
            <span className="block text-cyan-400">Meaningful With Data.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
            I am open to opportunities, collaborations and conversations
            around data analytics, data science and data engineering.
          </p>

          <a
            href="mailto:josejuma397@gmail.com"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
          >
            <Mail size={19} /> Send Me an Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Joseph. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>

          <a
            href="https://github.com/JosephAnalyst"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub <ExternalLink size={13} className="ml-1 inline" />
          </a>
        </div>
      </footer>
    </main>
  );
}
