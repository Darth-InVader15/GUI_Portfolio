import { useRef } from "react";
import "./experience.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const experience = [
    {
      role: "Software Engineer",
      company: "EY Parthenon",
      date: "June 2025 – Present",
      tech: "Python, Flask, TypeScript, React, Redis, PostgreSQL, Azure, Distributed systems",
      points: [
        "Developed and deployed a Contract Automation Platform for clients using TypeScript (React) and Python (Flask), reducing manual document workflows by 90%. Containerized microservices using Docker and managed deployments on Azure to ensure high availability.",
        "Engineered an end-to-end Data Visualization Pipeline automating the ETL process from Qualtrics to PowerPoint. Utilized Pandas for complex data manipulation and integrated OpenAI's API to build a generative AI engine.",
        "Revamped the legacy Internal Admin Dashboard used by operations teams. Diagnosed API bottlenecks and implemented a Redis caching strategy for frequently accessed endpoints, reducing average query latency by 65%."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "ChamakSaathi (Early-Stage Startup)",
      date: "June 2024 – August 2024",
      tech: "JavaScript, MERN Stack, AWS, Redux, Redis, OpenAI",
      points: [
        "Engineered the core web architecture using the MERN Stack, implementing Redux for global state management. Optimized frontend rendering performance by 35% through code-splitting and lazy loading.",
        "Developed a GenAI-powered Chatbot Microservice on AWS EC2, integrating the OpenAI API to provide real-time, context-aware user recommendations. Designed the API to handle concurrent user sessions, reducing response latency by caching frequent queries in Redis."
      ]
    },
    {
      role: "Software Development Project Intern",
      company: "National Institute of Technology, Kurukshetra",
      date: "January 2024 – June 2024",
      tech: "JavaScript, MERN Stack, Redux, Python, Scrapy",
      points: [
        "Architected a scalable Campus E-commerce Marketplace using the MERN Stack and Redux, featuring vendor dashboards and simulated payments; integrated a Scrapy pipeline to scrape and aggregate external product data for competitive pricing analysis."
      ]
    }
  ];

  return (
    <motion.div
      className="experience"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          My professional journey
          <br /> and career milestones.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            Work <motion.b whileHover={{ color: "orange" }}>Experience</motion.b>
          </motion.h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {experience.map((item, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{item.role} @ {item.company}</h2>
            <span>{item.date}</span>
            <p><strong>Stack:</strong> {item.tech}</p>
            <ul>
                {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
