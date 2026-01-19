// Imports
import { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { Zoom } from "react-reveal";

// Variants for animation
const variants = {
  initial: {
    x: -500,
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

// SkillButton component to reduce redundancy
const SkillButton = ({ name }) => (
  <motion.div
    className="techButton"
    whileHover={{ scale: 1.2, color: "orange" }}
    whileTap={{ scale: 0.9 }}
    initial={{ y: "100vh" }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    {name}
  </motion.div>
);

// Services component
const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const languages = ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Embedded C", "Assembly"];
  const frameworks = ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Flask", "Redux", "NumPy", "Flutter", "Framer Motion"];
  const tools = ["PostgreSQL", "MongoDB", "Redis", "SQLite", "AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub Actions", "Linux"];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Veni, Vidi, Vici
          <br /> 
        </p>
        <hr />
      </motion.div>
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            I Like <motion.b whileHover={{ color: "orange" }}>Exploring</motion.b>          </motion.h1>
        </div>
        <div className="title">
          <h1>
            New <motion.b whileHover={{ color: "orange" }}>Tech</motion.b>.
          </h1>
        </div>
      </motion.div>


      <Zoom>
      <h1 className="headerSpacing"> Languages I have worked with : <br></br> </h1>
      <motion.div className="Techs" variants={variants}>
        {languages.map((skill, index) => (
          <SkillButton key={index} name={skill} />
        ))}
      </motion.div>
        
      <h1 className="headerSpacing"> Libraries and Frameworks I have worked with : </h1>
      <div className="Techs">
        {frameworks.map((skill, index) => (
          <SkillButton key={index} name={skill} />
        ))}
      </div>

      <h1 className="headerSpacing"> Tools, Cloud & Databases : <br></br> </h1>
      <div className="Techs">
        {tools.map((skill, index) => (
          <SkillButton key={index} name={skill} />
        ))}
      </div>
      </Zoom>

      <motion.div className="listContainer" variants={variants}>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
