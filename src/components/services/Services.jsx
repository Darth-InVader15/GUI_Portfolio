// Imports
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Fade from 'react-reveal/Fade';
import { Zoom } from "react-reveal";
import { RESUME_LINK } from "../../constants";

//This file contains the About Me section of the portfolio

function redirectTo(url) {
  window.open(url, '_blank');
}

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

// Services component
const Services = () => {
  const ref = useRef();

  // Check if component is in view
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      {/* Text Container */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          So you want to know more about me?
          {/* <br /> Btw, I'm professionally known as Darth InVader. */}
        </p>
        <hr />
      </motion.div>
      
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.h1>
            Hello <motion.b whileHover={{ color: "orange" }}>World</motion.b> !
          </motion.h1>
        </div>
       
      </motion.div>

      {/* Education Background */}
      <Zoom>
      <motion.div
        className="education"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
      <motion.div className="educationBackground" variants={variants}>
        <h1>
        Piyush is a Software Engineer at EY Parthenon and a final year engineering undergrad at NIT Kurukshetra.
        </h1>
        <br></br>
        <Fade>
          <ul>
        <li className="listItems">
        He is passionate about technology and likes working on Robotics and Web Development projects.
        </li>        
        <li>
          In his free time, he likes solving DSA problems. He has solved more than 1000 problems across multiple platforms like Leetcode, GFG, Codeforces, etc. He also likes reading thriller novels.
        </li>
        <li>
          He has worked with languages like C++, JS, Python, Assembly, and SQL, and has also completed several Full-Stack projects.
          <br />
        </li>
        </ul>
      </Fade>

      </motion.div>
      </motion.div>
      </Zoom>



      {/* Links */}
      <Zoom><h1 className="title2"> View other profiles</h1></Zoom>
      <motion.div className="links" variants={variants}>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://github.com/Darth-InVader15')}
        >
          Github
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://leetcode.com/Darth-InVader15/')}
        >
          Leetcode
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.2, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo('https://auth.geeksforgeeks.org/user/darthinvader')}
        >
          GFG
        </motion.div>
        <motion.div
          className="techButton"
          whileHover={{ scale: 1.1, color: "orange" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => redirectTo(RESUME_LINK)}
        >
          View Resume
        </motion.div>
      </motion.div>

      

      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        {/* Content for list container */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
